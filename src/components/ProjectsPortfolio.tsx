import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Zap, CheckCircle2, X, Calendar, Leaf } from 'lucide-react';
import { SOLAR_PROJECTS } from '../data/solarData';
import { SolarProject } from '../types/solar';

interface ProjectsPortfolioProps {
  onEnquireSimilar: (projectName: string) => void;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({ onEnquireSimilar }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial' | 'industrial'>('all');
  const [selectedProject, setSelectedProject] = useState<SolarProject | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? SOLAR_PROJECTS
    : SOLAR_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="py-20 lg:py-28 bg-[#F5F2EB] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#E59A18] mb-3">
              08 · Engineering Track Record
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D2818] font-heading text-balance">
              Real Projects. Reliable Solar Installations.
            </h2>
            <p className="text-base text-[#475569] mt-3">
              Explore completed residential, commercial, and industrial turnkey power plants designed and commissioned by our team.
            </p>
          </div>

          {/* Filter Bar (Zero-pill button group) */}
          <div className="flex items-center gap-1 p-1.5 bg-[#EAE5D9] rounded-xl self-start md:self-auto shrink-0 border border-[#DCD5C7]">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-white text-[#0D2818] shadow-sm'
                  : 'text-[#475569] hover:text-[#0D2818]'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('residential')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'residential'
                  ? 'bg-white text-[#0D2818] shadow-sm'
                  : 'text-[#475569] hover:text-[#0D2818]'
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setActiveFilter('commercial')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'commercial'
                  ? 'bg-white text-[#0D2818] shadow-sm'
                  : 'text-[#475569] hover:text-[#0D2818]'
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setActiveFilter('industrial')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'industrial'
                  ? 'bg-white text-[#0D2818] shadow-sm'
                  : 'text-[#475569] hover:text-[#0D2818]'
              }`}
            >
              Industrial
            </button>
          </div>
        </div>

        {/* Asymmetrical Project Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden border border-[#E2DDD3] bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-56 overflow-hidden bg-[#E2ECE4]/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#0D2818]/90 text-white text-xs font-bold px-2.5 py-1 rounded backdrop-blur-sm">
                    {project.capacity}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 text-[#0D2818] text-[11px] font-semibold px-2 py-0.5 rounded shadow-sm">
                    {project.systemType}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-[#64748B] mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E59A18] shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0D2818] font-heading mb-2 group-hover:text-[#15803D] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4 line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Impact numbers */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#E2DDD3]/70">
                    <div>
                      <span className="block text-[11px] text-[#64748B]">Annual Yield</span>
                      <span className="text-xs sm:text-sm font-bold text-[#0D2818] tabular-nums">
                        {project.annualGeneration}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[11px] text-[#64748B]">Carbon Offset</span>
                      <span className="text-xs sm:text-sm font-bold text-[#15803D] tabular-nums">
                        {project.co2Offset}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footnote */}
              <div className="px-6 py-4 bg-[#FAF9F5] border-t border-[#E2DDD3] flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-[#0D2818] hover:text-[#E59A18] transition-colors flex items-center gap-1"
                >
                  <span>View Project Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-[#64748B]">{project.completionDate}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E2DDD3]">
            
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-80 overflow-hidden bg-slate-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#0D2818] text-[#E59A18] inline-block mb-1">
                  {selectedProject.capacity} · {selectedProject.systemType}
                </span>
                <h3 className="text-2xl font-bold text-white font-heading">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#64748B] pb-4 border-b border-[#E2DDD3]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#E59A18]" />
                  {selectedProject.location}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#0D2818]" />
                  Commissioned: {selectedProject.completionDate}
                </span>
                <span>·</span>
                <span>Category: {selectedProject.clientType}</span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#0D2818] uppercase tracking-wider mb-2">
                  Project Scope & Solution
                </h4>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Engineering Highlights */}
              <div>
                <h4 className="text-sm font-bold text-[#0D2818] uppercase tracking-wider mb-3">
                  Key Engineering Milestones:
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                      <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#FAF9F5] border border-[#E2DDD3]">
                <div>
                  <span className="block text-[11px] text-[#64748B]">Capacity</span>
                  <span className="text-base font-bold text-[#0D2818]">{selectedProject.capacity}</span>
                </div>
                <div>
                  <span className="block text-[11px] text-[#64748B]">Annual Generation</span>
                  <span className="text-base font-bold text-[#0D2818]">{selectedProject.annualGeneration}</span>
                </div>
                <div>
                  <span className="block text-[11px] text-[#64748B]">Annual CO2 Offset</span>
                  <span className="text-base font-bold text-[#15803D]">{selectedProject.co2Offset}</span>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-[#475569] hover:text-[#0D2818]"
                >
                  Close Case Study
                </button>
                <button
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProject(null);
                    onEnquireSimilar(title);
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0D2818] rounded-lg hover:bg-[#153D25] transition-colors"
                >
                  <span>Inquire About a Similar Installation</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E59A18]" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
