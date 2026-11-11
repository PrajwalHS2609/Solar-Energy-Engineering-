import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle, Send, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import { PropertyType, SystemType, QuoteFormData } from '../types/solar';

interface ContactQuoteSectionProps {
  initialData?: {
    propertyType?: PropertyType;
    systemType?: SystemType;
    monthlyBill?: number;
    rooftopArea?: number;
    preferredCapacity?: string;
    notes?: string;
  };
}

export const ContactQuoteSection: React.FC<ContactQuoteSectionProps> = ({ initialData }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    propertyType: initialData?.propertyType || 'residential',
    monthlyBill: initialData?.monthlyBill || 350,
    rooftopArea: initialData?.rooftopArea || 1200,
    systemType: initialData?.systemType || 'hybrid',
    preferredCapacity: initialData?.preferredCapacity || '8 kWp',
    notes: initialData?.notes || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedBrief, setSubmittedBrief] = useState<{
    referenceId: string;
    timestamp: string;
    data: QuoteFormData;
  } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid phone number for engineer callback';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      errs.phone = 'Please enter a valid phone number with area code';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address for your quote brief';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.location.trim()) errs.location = 'Please state your city or installation location';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const refNum = 'SOL-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedBrief({
        referenceId: refNum,
        timestamp: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        data: { ...formData },
      });
    }
  };

  const handleReset = () => {
    setSubmittedBrief(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      location: '',
      propertyType: 'residential',
      monthlyBill: 350,
      rooftopArea: 1200,
      systemType: 'hybrid',
      preferredCapacity: '8 kWp',
      notes: '',
    });
  };

  return (
    <section id="contact-enquiry" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#E59A18] mb-3">
            14 · Connect with an Engineer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D2818] font-heading text-balance">
            Contact & Solar Installation Enquiry
          </h2>
          <p className="text-base text-[#475569] mt-3">
            Schedule a complimentary rooftop feasibility audit or receive an itemized turnkey proposal. Our engineering desk responds within 1 business day.
          </p>
        </div>

        {/* 2-Column Split: Enquiry Form & Direct Corporate Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form / Submitted Confirmation Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-[#E2DDD3] shadow-sm">
            
            {!submittedBrief ? (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <h3 className="text-xl font-bold text-[#0D2818] font-heading mb-1">
                    Solar Project Appraisal Form
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Please provide your installation requirements to receive an accurate system design.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0D2818] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. David Sterling"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-[#FAF9F5] focus:outline-none focus:ring-1 focus:ring-[#0D2818] ${
                        errors.fullName ? 'border-red-500' : 'border-[#E2DDD3]'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0D2818] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 (512) 555-0198"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-[#FAF9F5] focus:outline-none focus:ring-1 focus:ring-[#0D2818] ${
                        errors.phone ? 'border-red-500' : 'border-[#E2DDD3]'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0D2818] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. david@example.com"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-[#FAF9F5] focus:outline-none focus:ring-1 focus:ring-[#0D2818] ${
                        errors.email ? 'border-red-500' : 'border-[#E2DDD3]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0D2818] mb-1.5">
                      Installation Location / City *
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Austin, TX (City & Zip)"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-[#FAF9F5] focus:outline-none focus:ring-1 focus:ring-[#0D2818] ${
                        errors.location ? 'border-red-500' : 'border-[#E2DDD3]'
                      }`}
                    />
                    {errors.location && <p className="text-[11px] text-red-600 mt-1">{errors.location}</p>}
                  </div>
                </div>

                {/* Property Type & System Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0D2818] mb-1.5">
                      Property Classification
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as PropertyType })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#E2DDD3] bg-[#FAF9F5] focus:outline-none focus:ring-1 focus:ring-[#0D2818]"
                    >
                      <option value="residential">Residential Villa / Independent Home</option>
                      <option value="commercial">Commercial Office / School / Hospital</option>
                      <option value="industrial">Industrial Factory / Logistics Hub</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0D2818] mb-1.5">
                      Required System Architecture
                    </label>
                    <select
                      value={formData.systemType}
                      onChange={(e) => setFormData({ ...formData, systemType: e.target.value as SystemType })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#E2DDD3] bg-[#FAF9F5] focus:outline-none focus:ring-1 focus:ring-[#0D2818]"
                    >
                      <option value="hybrid">Hybrid (Grid Sync + Battery Backup)</option>
                      <option value="on-grid">On-Grid (Net Metered, No Battery)</option>
                      <option value="off-grid">Off-Grid (100% Autonomous Storage)</option>
                    </select>
                  </div>
                </div>

                {/* Monthly Bill & Rooftop Area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0D2818] mb-1.5">
                      Average Monthly Electricity Bill ($)
                    </label>
                    <input
                      type="number"
                      value={formData.monthlyBill}
                      onChange={(e) => setFormData({ ...formData, monthlyBill: Number(e.target.value) })}
                      min="10"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#E2DDD3] bg-[#FAF9F5] focus:outline-none focus:ring-1 focus:ring-[#0D2818]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0D2818] mb-1.5">
                      Available Rooftop Area (approx. sq.ft)
                    </label>
                    <input
                      type="number"
                      value={formData.rooftopArea}
                      onChange={(e) => setFormData({ ...formData, rooftopArea: Number(e.target.value) })}
                      min="50"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#E2DDD3] bg-[#FAF9F5] focus:outline-none focus:ring-1 focus:ring-[#0D2818]"
                    />
                  </div>
                </div>

                {/* Preferred Capacity & Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0D2818] mb-1.5">
                    Preferred System Capacity (optional if known)
                  </label>
                  <input
                    type="text"
                    value={formData.preferredCapacity}
                    onChange={(e) => setFormData({ ...formData, preferredCapacity: e.target.value })}
                    placeholder="e.g. 5 kWp, 15 kWp, 100 kWp, or 'Recommend to me'"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#E2DDD3] bg-[#FAF9F5] focus:outline-none focus:ring-1 focus:ring-[#0D2818]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0D2818] mb-1.5">
                    Project Requirements / Specific Inquiries
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Mention any specific requirements (e.g., roof type, backup hours needed, diesel generator synchronization, subsidy filing questions)..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#E2DDD3] bg-[#FAF9F5] focus:outline-none focus:ring-1 focus:ring-[#0D2818]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-[#0D2818] hover:bg-[#153D25] rounded-lg transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D2818]"
                >
                  <Send className="w-4 h-4 text-[#E59A18]" />
                  <span>Submit Solar Installation Enquiry</span>
                </button>

                <p className="text-[11px] text-[#64748B] text-center">
                  Your details are held strictly confidential. No telemarketers or third-party lead brokers.
                </p>
              </form>
            ) : (
              /* Success Confirmation Card */
              <div className="space-y-6 text-left animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#15803D]/10 border border-[#15803D]/20 text-[#15803D]">
                  <CheckCircle className="w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold">
                      Enquiry Successfully Received & Registered
                    </h4>
                    <p className="text-xs text-[#15803D]/80">
                      Our solar design engineer will review your rooftop parameters and contact you within 24 hours.
                    </p>
                  </div>
                </div>

                {/* Registered Brief */}
                <div className="p-6 rounded-xl bg-[#FAF9F5] border border-[#E2DDD3] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD3]">
                    <div>
                      <span className="text-[11px] text-[#64748B] uppercase tracking-wider block">
                        Official Project Reference ID
                      </span>
                      <span className="text-base font-bold text-[#0D2818] font-heading tabular-nums">
                        {submittedBrief.referenceId}
                      </span>
                    </div>
                    <span className="text-xs text-[#64748B]">
                      {submittedBrief.timestamp}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[#64748B] block">Client Name:</span>
                      <span className="font-semibold text-[#0D2818]">{submittedBrief.data.fullName}</span>
                    </div>
                    <div>
                      <span className="text-[#64748B] block">Contact Phone:</span>
                      <span className="font-semibold text-[#0D2818]">{submittedBrief.data.phone}</span>
                    </div>
                    <div>
                      <span className="text-[#64748B] block">Property Location:</span>
                      <span className="font-semibold text-[#0D2818]">{submittedBrief.data.location}</span>
                    </div>
                    <div>
                      <span className="text-[#64748B] block">Architecture:</span>
                      <span className="font-semibold text-[#0D2818] capitalize">
                        {submittedBrief.data.propertyType} · {submittedBrief.data.systemType}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#64748B] block">Monthly Bill:</span>
                      <span className="font-semibold text-[#0D2818]">${submittedBrief.data.monthlyBill}/mo</span>
                    </div>
                    <div>
                      <span className="text-[#64748B] block">Estimated Roof Area:</span>
                      <span className="font-semibold text-[#0D2818]">{submittedBrief.data.rooftopArea} sq.ft</span>
                    </div>
                  </div>

                  {submittedBrief.data.notes && (
                    <div className="pt-3 border-t border-[#E2DDD3] text-xs">
                      <span className="text-[#64748B] block mb-1">Client Notes:</span>
                      <p className="text-[#334155] italic">"{submittedBrief.data.notes}"</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <button
                    onClick={handleReset}
                    className="text-xs font-semibold text-[#0D2818] hover:underline"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href="tel:18004927652"
                    className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0D2818] rounded-lg hover:bg-[#153D25]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E59A18]" />
                    <span>Speak with Engineer Now</span>
                  </a>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Corporate Contacts & Interactive Map Box */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="p-8 rounded-2xl bg-white border border-[#E2DDD3] shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#0D2818] font-heading">
                Corporate Headquarters & Engineering Desk
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E59A18] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0D2818] block">Main Address</span>
                    <span className="text-[#475569]">
                      450 Sunward Boulevard, Renewable Energy Park<br />
                      Austin, TX 78701, United States
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#E59A18] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0D2818] block">Direct Hotline</span>
                    <a href="tel:18004927652" className="text-[#0D2818] font-semibold hover:text-[#E59A18] transition-colors">
                      +1 (800) 492-7652 / +1 (512) 840-7910
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#E59A18] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0D2818] block">Engineering & Tenders</span>
                    <a href="mailto:inquiry@solentra-energy.com" className="text-[#0D2818] font-semibold hover:text-[#E59A18] transition-colors">
                      inquiry@solentra-energy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#E59A18] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0D2818] block">Operating Hours</span>
                    <span className="text-[#475569]">
                      Monday – Friday: 8:00 AM – 6:00 PM<br />
                      Saturday: 9:00 AM – 2:00 PM (Emergency Dispatch 24/7)
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Chat Button */}
              <div className="pt-4 border-t border-[#E2DDD3]">
                <a
                  href="https://wa.me/18004927652?text=Hello%20Solentra%20Energy,%20I%20would%20like%20to%20request%20a%20solar%20consultation%20for%20my%20property."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold rounded-lg bg-[#15803D] hover:bg-[#166534] text-white transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start Live WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Google Maps Real-World Location Integration Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2DDD3] shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs text-[#64748B]">
                <span className="font-bold uppercase tracking-wider text-[#0D2818]">Regional Headquarters</span>
                <span>30.2672° N, 97.7431° W</span>
              </div>

              {/* Clean Map Graphic Container */}
              <div className="relative h-44 rounded-xl overflow-hidden border border-[#E2DDD3] bg-[#E2ECE4]/50 flex items-center justify-center">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#0D2818_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 text-center p-4">
                  <div className="w-10 h-10 rounded-full bg-[#0D2818] text-[#E59A18] flex items-center justify-center mx-auto mb-2 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#0D2818] block">Solentra Solar Tech Park</span>
                  <span className="text-[11px] text-[#64748B]">Austin, Texas Regional Center</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-[#64748B]">On-site testing lab & warehouse</span>
                <a
                  href="https://maps.google.com/?q=Austin,+TX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#0D2818] hover:text-[#E59A18] flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
