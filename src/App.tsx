import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TherapyServices } from './components/TherapyServices';
import { TherapyRoadmap } from './components/TherapyRoadmap';
import { ParentDashboardSection } from './components/ParentDashboardSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { AssessmentModal } from './components/AssessmentModal';
import { ParentDashboardModal } from './components/ParentDashboardModal';
import { CLINIC_INFO } from './data/clinicData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [selectedConcern, setSelectedConcern] = useState<string | undefined>(undefined);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);

  const handleOpenAssessmentModal = (concern?: string, pkg?: string) => {
    setSelectedConcern(concern);
    setSelectedPackage(pkg);
    setIsAssessmentModalOpen(true);
  };

  const handleSelectConcern = (concern: string) => {
    setSelectedConcern(concern);
    setSelectedPackage(undefined);
    setIsAssessmentModalOpen(true);
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackage(packageName);
    setSelectedConcern(undefined);
    setIsAssessmentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] font-body flex flex-col selection:bg-brand-blue-light selection:text-brand-blue-dark">
      {/* Top Navigation Bar */}
      <Header
        onOpenAssessmentModal={() => handleOpenAssessmentModal()}
        onOpenParentPortalModal={() => setIsPortalModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow pt-20">
        <HeroSection onOpenAssessmentModal={() => handleOpenAssessmentModal()} />
        <WhyChooseUs />
        <TherapyServices onSelectConcern={handleSelectConcern} />
        <TherapyRoadmap />
        <ParentDashboardSection onOpenPortalModal={() => setIsPortalModalOpen(true)} />
        <FacilitiesSection />
        <PricingSection onSelectPackage={handleSelectPackage} />
        <FaqSection />
        <CtaBanner onOpenAssessmentModal={() => handleOpenAssessmentModal()} />
      </main>

      {/* Footer */}
      <Footer onOpenParentPortalModal={() => setIsPortalModalOpen(true)} />

      {/* Interactive Booking & Assessment Modal */}
      <AssessmentModal
        isOpen={isAssessmentModalOpen}
        onClose={() => setIsAssessmentModalOpen(false)}
        preselectedConcern={selectedConcern}
        preselectedPackage={selectedPackage}
      />

      {/* Interactive Parent Portal Modal */}
      <ParentDashboardModal
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
        onRequestAccess={() => handleOpenAssessmentModal()}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=Halo%20Admin%20Klinik%20Harapanku%20Balikpapan,%20saya%20ingin%20bertanya%20seputar%20layanan%20terapi%20anak.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Klinik Harapanku"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">Hubungi via WhatsApp</span>
        {/* Tooltip on hover for desktop */}
        <span className="hidden lg:group-hover:block absolute right-16 bg-slate-900 text-white text-xs font-subheading font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg animate-in fade-in-50">
          Chat WhatsApp Klinik
        </span>
      </a>
    </div>
  );
}
