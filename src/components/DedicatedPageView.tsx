import React from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Sun, Phone, FileText, ChevronRight } from 'lucide-react';
import {
  HERO_IMAGE,
  RESIDENTIAL_IMAGE,
  COMMERCIAL_IMAGE,
  INDUSTRIAL_IMAGE,
  BATTERY_IMAGE,
  SOLAR_SERVICES,
  SOLAR_PROJECTS,
  TECHNOLOGY_COMPONENTS,
  FAQ_ITEMS,
  BLOG_POSTS,
} from '../data/solarData';

interface DedicatedPageViewProps {
  viewId: string;
  onBackToHome: () => void;
  onRequestQuote: () => void;
  onOpenEstimator: () => void;
}

export const DedicatedPageView: React.FC<DedicatedPageViewProps> = ({
  viewId,
  onBackToHome,
  onRequestQuote,
  onOpenEstimator,
}) => {
  // Determine page content by viewId
  const getPageData = () => {
    switch (viewId) {
      case 'residential':
        return {
          title: 'Residential Rooftop Solar Installation',
          subtitle: 'Clean, Quiet & High-Yield Solar Power for Contemporary Residences',
          image: RESIDENTIAL_IMAGE,
          lead: 'Custom-designed rooftop solar systems for private villas and single-family residences. Engineered to maximize self-sufficiency, preserve architectural lines, and reduce power bills by up to 90%.',
          specs: [
            { label: 'System Capacities', value: '3 kWp to 25 kWp' },
            { label: 'Roof Types', value: 'Pitched tile, Standing seam metal, Flat RCC' },
            { label: 'Net Metering', value: 'Turnkey utility DISCOM permit handling' },
            { label: 'Battery Backup', value: '5 kWh to 20 kWh LiFePO4 options' },
          ],
          sections: [
            {
              heading: 'Architecturally Integrated Clean Energy',
              text: 'We understand that your home is an aesthetic expression. Solentra uses sleek, all-black monocrystalline modules with concealed cable trays and flush-mount aluminum structures, delivering maximum harvest with zero visible industrial clutter.'
            },
            {
              heading: 'Daytime Solar + Nighttime Battery Storage',
              text: 'By pairing your solar panels with a high-capacity lithium battery bank, you achieve true energy independence. Daytime solar generation runs household air conditioning and pumps while charging the battery; in the evening, the battery powers your home through peak tariff hours.'
            }
          ]
        };

      case 'commercial':
        return {
          title: 'Commercial Solar Energy Systems',
          subtitle: 'Turn Rooftops & Carports into High-ROI Corporate Energy Assets',
          image: COMMERCIAL_IMAGE,
          lead: 'Turnkey solar PV solutions engineered for offices, commercial IT parks, hospitals, educational institutions, and retail facilities. Eliminate peak daytime commercial power tariffs.',
          specs: [
            { label: 'System Capacities', value: '30 kWp to 500 kWp' },
            { label: 'Operating Voltage', value: '415V 3-Phase / 11kV HT Interconnection' },
            { label: 'Tax Benefits', value: '40% Accelerated Depreciation eligible' },
            { label: 'Monitoring', value: 'Multi-tenant cloud SCADA portal' },
          ],
          sections: [
            {
              heading: 'Eliminate Peak Daytime Demand Tariffs',
              text: 'Commercial facilities face their steepest electricity rates during daytime business hours—precisely when solar irradiance is at its peak. A commercial installation immediately flattens your demand curve.'
            },
            {
              heading: 'Solar Carports with Integrated EV Charging',
              text: 'Transform your outdoor executive parking lots into shaded parking canopies that generate megawatt-hours of clean energy while offering dual-port EV chargers for staff and visitors.'
            }
          ]
        };

      case 'industrial':
        return {
          title: 'Industrial Megawatt-Scale Solar Solutions',
          subtitle: 'Heavy-Duty Renewable Power for Factories, Warehouses & Logistics Hubs',
          image: INDUSTRIAL_IMAGE,
          lead: 'Engineered for metal standing seam and trapezoidal roofs on heavy manufacturing plants, cold storages, textile mills, and logistics fulfillment facilities.',
          specs: [
            { label: 'System Capacities', value: '100 kWp to 5+ MWp' },
            { label: 'Roof Clamp Standard', value: 'Non-penetrative standing seam clamps' },
            { label: 'Generator Sync', value: 'Zero-export controller with DG set sync' },
            { label: 'Safety Standards', value: 'CEA, CEIG & Factory Act compliance' },
          ],
          sections: [
            {
              heading: 'Preserving Factory Roof Integrity',
              text: 'We deploy specialized standing seam aluminum clamps that anchor directly to the metal roof ribs without piercing the sheet metal, preserving your original roof waterproofing and factory building warranties.'
            },
            {
              heading: 'Intelligent Diesel Generator Synchronization',
              text: 'In areas with intermittent industrial grid power, our smart zero-export controllers dynamically match solar generation with backup diesel generators, reducing diesel fuel consumption by up to 60% without backfeeding.'
            }
          ]
        };

      case 'systems':
        return {
          title: 'On-Grid, Off-Grid & Hybrid Solar Systems',
          subtitle: 'Comprehensive System Architecture Comparison & Engineering',
          image: BATTERY_IMAGE,
          lead: 'Explore the operational differences between grid-tied net-metered solar, autonomous off-grid microgrids, and intelligent hybrid systems with battery energy storage.',
          specs: [
            { label: 'On-Grid', value: 'Lowest capex, maximum net metering ROI' },
            { label: 'Hybrid', value: '< 10ms UPS grade blackout resilience' },
            { label: 'Off-Grid', value: '100% remote independence, zero utility grid' },
            { label: 'Battery Lifespan', value: '6,000+ cycles (15+ years design life)' },
          ],
          sections: [
            {
              heading: 'Which Solar Architecture is Right for You?',
              text: 'If your property is in an urban center with dependable grid power, an On-Grid system offers the shortest payback period. If you experience regular outages or operate critical medical/IT equipment, a Hybrid system delivers seamless uninterrupted power.'
            }
          ]
        };

      case 'about':
        return {
          title: 'About Solentra Energy',
          subtitle: 'Pioneering Renewable Energy Engineering & Sustainable Infrastructure',
          image: HERO_IMAGE,
          lead: 'Founded with a singular mission: to deliver uncompromising engineering excellence, transparent pricing, and 25-year reliability in the solar energy sector.',
          specs: [
            { label: 'Track Record', value: '48.6 MWp Installed' },
            { label: 'Safety Record', value: 'Zero Lost-Time Incidents' },
            { label: 'Certifications', value: 'NABCEP, IEEE, IEC Certified' },
            { label: 'Engineering Team', value: 'In-house Master Electricians' },
          ],
          sections: [
            {
              heading: 'The Engineering-First Difference',
              text: 'Unlike sales-heavy aggregators who subcontract installations to lowest-bidder crews, Solentra maintains a dedicated, in-house team of licensed electrical engineers and structural designers who oversee every project from 3D CAD modeling to final utility meter energization.'
            }
          ]
        };

      default:
        return {
          title: 'Solar Energy Engineering & Installation',
          subtitle: 'Advanced Clean Energy Systems for Homes and Businesses',
          image: HERO_IMAGE,
          lead: 'Solentra Energy designs, builds, and maintains high-performance rooftop solar installations and battery storage systems.',
          specs: [
            { label: 'Capacity Range', value: '3 kWp to 5+ MWp' },
            { label: 'Warranty', value: '25-Year Performance Guarantee' },
            { label: 'Support', value: '24/7 Cloud Telemetry' },
            { label: 'Permits', value: '100% Turnkey Handling' },
          ],
          sections: [
            {
              heading: 'Complete Turnkey Delivery',
              text: 'From initial shadow modeling and structural assessment to utility interconnection and mobile app monitoring, we handle every aspect of your solar transition.'
            }
          ]
        };
    }
  };

  const data = getPageData();

  return (
    <div className="min-h-screen bg-[#FAF9F5]">
      
      {/* Subpage Breadcrumb Bar */}
      <div className="border-b border-[#E2DDD3] bg-white py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#64748B]">
            <button
              onClick={onBackToHome}
              className="text-[#0D2818] font-semibold hover:underline flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#CBD5E1]" />
            <span className="text-[#0D2818] font-medium">{data.title}</span>
          </div>

          <button
            onClick={onRequestQuote}
            className="text-xs font-semibold text-[#0D2818] hover:text-[#E59A18] flex items-center gap-1"
          >
            <span>Request Proposal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Subpage Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-[#0D2818] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E59A18] block">
                {data.subtitle}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading text-balance">
                {data.title}
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                {data.lead}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onRequestQuote}
                  className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0D2818] bg-[#E59A18] hover:bg-[#D97706] rounded-lg transition-colors shadow-sm"
                >
                  <span>Request Custom Proposal</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0D2818]" />
                </button>
                <button
                  onClick={onOpenEstimator}
                  className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors"
                >
                  <span>Calculate System Sizing</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-slate-900 h-[340px]">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technical Specifications Bar */}
      <section className="py-8 bg-white border-b border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.specs.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E2DDD3]">
                <span className="block text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-sm font-bold text-[#0D2818] mt-0.5 block">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Content Sections */}
      <section className="py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {data.sections.map((sec, idx) => (
          <div key={idx} className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0D2818] font-heading">
              {sec.heading}
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              {sec.text}
            </p>
          </div>
        ))}

        {/* Reassurance Callout Box */}
        <div className="p-8 rounded-2xl bg-[#F5F2EB] border border-[#E2DDD3] space-y-4">
          <div className="flex items-center gap-2.5 text-[#0D2818] font-bold text-base">
            <ShieldCheck className="w-5 h-5 text-[#15803D]" />
            <span>The Solentra 25-Year Engineering Commitment</span>
          </div>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Every project includes full 3D CAD modeling, shadow simulation, civil structural audit, Tier-1 equipment procurement, end-to-end DISCOM net metering liaisoning, and ongoing cloud telemetry monitoring.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={onRequestQuote}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0D2818] rounded-lg hover:bg-[#153D25]"
            >
              Get Free Rooftop Assessment
            </button>
            <button
              onClick={onBackToHome}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#0D2818] bg-white border border-[#CBD5E1] rounded-lg hover:bg-[#F0ECE1]"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
