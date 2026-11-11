import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { FAQ_ITEMS } from '../data/solarData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#E2DDD3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#E59A18] mb-3">
            13 · Common Queries Answered
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D2818] font-heading text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#475569] mt-3">
            Clear, practical answers about rooftop solar engineering, grid interconnection, battery storage, and financial return.
          </p>
        </div>

        {/* Search Bar & Category Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-[#64748B]" />
            <input
              type="text"
              placeholder="Search solar questions (e.g. cloudy, subsidy, space, warranty)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#E2DDD3] bg-white focus:outline-none focus:ring-1 focus:ring-[#0D2818] shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-semibold">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'basics', label: 'Solar Basics' },
              { id: 'technical', label: 'Engineering & Roof' },
              { id: 'costs', label: 'Costs & Sizing' },
              { id: 'subsidies', label: 'Subsidies & Net Metering' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#0D2818] text-white shadow-xs'
                    : 'bg-white text-[#475569] border border-[#E2DDD3] hover:border-[#CBD5E1]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-[#E2DDD3] bg-white overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-heading focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0D2818]"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0D2818]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#0D2818] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#E59A18]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E2DDD3]/50 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center text-xs text-[#64748B] bg-white rounded-xl border border-[#E2DDD3]">
              No questions found matching your search. Feel free to contact our engineering team directly!
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
