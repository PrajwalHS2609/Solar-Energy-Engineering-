import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '../data/solarData';
import { BlogPost } from '../types/solar';

export const BlogResources: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-[#F5F2EB] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#E59A18] mb-3">
              12 · Solar Knowledge Base
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D2818] font-heading text-balance">
              Learn More About Solar Energy.
            </h2>
            <p className="text-base text-[#475569] mt-3">
              Deepen your understanding of photovoltaic physics, grid interconnection, battery chemistry, and solar economics with guides written by our engineers.
            </p>
          </div>
        </div>

        {/* 3-Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="p-8 rounded-2xl bg-white border border-[#E2DDD3] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Metadata line without pills */}
                <div className="flex items-center gap-2 text-xs text-[#64748B] mb-3">
                  <span className="font-semibold text-[#E59A18] uppercase tracking-wider">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#64748B]" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0D2818] font-heading mb-3 hover:text-[#15803D] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2DDD3] flex items-center justify-between">
                <span className="text-[11px] text-[#64748B]">{post.date}</span>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#0D2818] hover:text-[#E59A18] transition-colors"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-[#E2DDD3]">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-[#E59A18] uppercase tracking-wider block mb-1">
                  {selectedPost.category} · {selectedPost.readTime}
                </span>
                <h3 className="text-2xl font-bold text-[#0D2818] font-heading">
                  {selectedPost.title}
                </h3>
                <span className="text-xs text-[#64748B] block mt-1">Published {selectedPost.date} by Solentra Technical Team</span>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-2 rounded-full hover:bg-[#FAF9F5] text-[#64748B] hover:text-[#0D2818]"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#334155] leading-relaxed border-t border-[#E2DDD3] pt-6">
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2DDD3] flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2.5 text-xs font-semibold bg-[#0D2818] text-white rounded-lg hover:bg-[#153D25]"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
