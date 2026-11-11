/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyIntro } from './components/CompanyIntro';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessTimeline } from './components/ProcessTimeline';
import { SectorsSection } from './components/SectorsSection';
import { TechnologySection } from './components/TechnologySection';
import { BenefitsSection } from './components/BenefitsSection';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { SolarEstimator } from './components/SolarEstimator';
import { FinancingSubsidySection } from './components/FinancingSubsidySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogResources } from './components/BlogResources';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { ContactQuoteSection } from './components/ContactQuoteSection';
import { Footer } from './components/Footer';
import { DedicatedPageView } from './components/DedicatedPageView';
import { FloatingActions } from './components/FloatingActions';
import { PropertyType, SystemType, SolarService } from './types/solar';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [quotePreload, setQuotePreload] = useState<{
    propertyType?: PropertyType;
    systemType?: SystemType;
    monthlyBill?: number;
    rooftopArea?: number;
    preferredCapacity?: string;
    notes?: string;
  }>({});

  const scrollToSection = (sectionId: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (view: string) => {
    if (view === 'home') {
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'services') {
      scrollToSection('services-section');
    } else if (view === 'solutions') {
      scrollToSection('solutions-section');
    } else if (view === 'technology') {
      scrollToSection('technology-section');
    } else if (view === 'portfolio') {
      scrollToSection('portfolio-section');
    } else if (view === 'estimator') {
      scrollToSection('solar-estimator');
    } else if (view === 'contact') {
      scrollToSection('contact-enquiry');
    } else {
      // Navigate to dedicated page view (residential, commercial, industrial, systems, about, subsidy, blog, faq)
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRequestQuote = () => {
    scrollToSection('contact-enquiry');
  };

  const handleOpenEstimator = () => {
    scrollToSection('solar-estimator');
  };

  const handleApplyEstimateToQuote = (estimate: {
    propertyType: PropertyType;
    systemType: SystemType;
    monthlyBill: number;
    rooftopArea: number;
    suggestedCapacity: string;
    annualSavings: string;
  }) => {
    setQuotePreload({
      propertyType: estimate.propertyType,
      systemType: estimate.systemType,
      monthlyBill: estimate.monthlyBill,
      rooftopArea: estimate.rooftopArea,
      preferredCapacity: estimate.suggestedCapacity,
      notes: `Estimated based on Solar Calculator: ${estimate.suggestedCapacity} system with potential savings of ${estimate.annualSavings}.`,
    });
    scrollToSection('contact-enquiry');
  };

  const handleEnquireService = (serviceTitle: string) => {
    setQuotePreload((prev) => ({
      ...prev,
      notes: `Inquiring specifically about ${serviceTitle}.`,
    }));
    scrollToSection('contact-enquiry');
  };

  const isDedicatedView = [
    'residential',
    'commercial',
    'industrial',
    'systems',
    'about',
  ].includes(currentView);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1E293B] flex flex-col font-sans">
      {/* Top Bar Contract Compliant Navbar */}
      <Navbar
        activeView={currentView}
        onNavigate={handleNavigate}
        onRequestQuote={handleRequestQuote}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {isDedicatedView ? (
          <DedicatedPageView
            viewId={currentView}
            onBackToHome={() => handleNavigate('home')}
            onRequestQuote={handleRequestQuote}
            onOpenEstimator={handleOpenEstimator}
          />
        ) : (
          /* Flagship 17-Section Homepage Experience */
          <>
            {/* Section 1: Hero Section */}
            <Hero
              onRequestQuote={handleRequestQuote}
              onOpenEstimator={handleOpenEstimator}
              onExploreServices={() => scrollToSection('services-section')}
            />

            {/* Section 2: Company Introduction */}
            <CompanyIntro
              onDiscoverMore={() => handleNavigate('about')}
              onRequestAssessment={handleRequestQuote}
            />

            {/* Section 3: Solar Installation Services */}
            <div id="services-section">
              <ServicesSection
                onSelectService={(service: SolarService) => {
                  if (service.id === 'residential-rooftop') handleNavigate('residential');
                  else if (service.id === 'commercial-solar') handleNavigate('commercial');
                  else if (service.id === 'industrial-solar') handleNavigate('industrial');
                  else handleEnquireService(service.title);
                }}
                onEnquire={handleEnquireService}
              />
            </div>

            {/* Section 4: Why Choose Us */}
            <WhyChooseUs />

            {/* Section 5: Process Timeline */}
            <ProcessTimeline onStartStepOne={handleRequestQuote} />

            {/* Section 6: Sector Solutions (Residential, Commercial, Industrial) */}
            <div id="solutions-section">
              <SectorsSection onEnquireSector={handleEnquireService} />
            </div>

            {/* Section 7: Solar Technology & Hardware */}
            <div id="technology-section">
              <TechnologySection />
            </div>

            {/* Section 8: Benefits of Switching to Solar */}
            <BenefitsSection onOpenEstimator={handleOpenEstimator} />

            {/* Section 9: Solar Projects & Portfolio */}
            <div id="portfolio-section">
              <ProjectsPortfolio onEnquireSimilar={handleEnquireService} />
            </div>

            {/* Section 10: Interactive Solar Savings Estimator */}
            <SolarEstimator onApplyEstimateToQuote={handleApplyEstimateToQuote} />

            {/* Section 11: Financing, Subsidies & Tax Incentives */}
            <FinancingSubsidySection onEnquireFinancing={handleRequestQuote} />

            {/* Section 12: Customer Testimonials */}
            <TestimonialsSection />

            {/* Section 13: Blog & Educational Guides */}
            <BlogResources />

            {/* Section 14: Frequently Asked Questions */}
            <div id="faq-section">
              <FaqSection />
            </div>

            {/* Section 15: Final High-Conversion CTA */}
            <FinalCta
              onRequestConsultation={handleRequestQuote}
              onRequestAssessment={handleRequestQuote}
            />

            {/* Section 16: Contact & Solar Enquiry Lead Form */}
            <ContactQuoteSection initialData={quotePreload} />
          </>
        )}
      </main>

      {/* Section 17: Professional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestQuote={handleRequestQuote}
      />

      {/* Floating Action Buttons (WhatsApp & Quick Estimator) */}
      <FloatingActions
        onOpenEstimator={handleOpenEstimator}
        onRequestQuote={handleRequestQuote}
      />
    </div>
  );
}
