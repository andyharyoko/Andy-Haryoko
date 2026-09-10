import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Calendar, MessageCircle, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenAssessmentModal: (preselectedConcern?: string, preselectedPackage?: string) => void;
  onOpenParentPortalModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAssessmentModal, onOpenParentPortalModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
      <div className="h-20 max-w-[1240px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={CLINIC_INFO.logoUrl}
            alt="Harapanku Clinic Logo"
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold font-subheading text-slate-600">
          <a href="#layanan" className="hover:text-brand-blue transition-colors py-2">
            Layanan Terapi
          </a>
          <a href="#fasilitas" className="hover:text-brand-blue transition-colors py-2">
            Fasilitas
          </a>
          <a href="#paket-asesmen" className="hover:text-brand-blue transition-colors py-2">
            Paket Asesmen
          </a>
          <a href="#alur" className="hover:text-brand-blue transition-colors py-2">
            Alur Konsultasi
          </a>
          <a href="#dashboard" className="hover:text-brand-blue transition-colors py-2">
            Parent Dashboard
          </a>
          <a href="#faq" className="hover:text-brand-blue transition-colors py-2">
            FAQ
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenAssessmentModal()}
            className="hidden sm:inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-subheading font-bold text-sm px-5 py-2.5 rounded-full shadow-[0_4px_14px_rgba(245,166,35,0.35)] transition-all hover:shadow-[0_6px_18px_rgba(245,166,35,0.45)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Daftar Asesmen Awal</span>
          </button>
          
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat WhatsApp"
            className="w-10 h-10 rounded-full bg-brand-blue-light text-brand-blue hover:bg-brand-blue hover:text-white flex items-center justify-center transition-all shadow-sm"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          {/* Mobile menu hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3 font-subheading font-semibold text-slate-700 text-sm">
            <a
              href="#layanan"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-brand-blue border-b border-slate-100"
            >
              Layanan Terapi
            </a>
            <a
              href="#fasilitas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-brand-blue border-b border-slate-100"
            >
              Fasilitas
            </a>
            <a
              href="#paket-asesmen"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-brand-blue border-b border-slate-100"
            >
              Paket Asesmen
            </a>
            <a
              href="#alur"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-brand-blue border-b border-slate-100"
            >
              Alur Konsultasi
            </a>
            <a
              href="#dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-brand-blue border-b border-slate-100"
            >
              Parent Dashboard
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-brand-blue border-b border-slate-100"
            >
              FAQ
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssessmentModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-brand-orange text-white font-subheading font-bold text-sm py-3 rounded-xl shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Daftar Asesmen Awal</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
