import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageCircle, MapPin, Phone, Clock } from 'lucide-react';

interface FooterProps {
  onOpenParentPortalModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenParentPortalModal }) => {
  return (
    <footer className="w-full bg-white border-t border-slate-150 pt-16 pb-12">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-100">
          {/* Col 1 */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={CLINIC_INFO.logoUrl}
                alt="Harapanku Clinic Logo"
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="font-body text-sm text-slate-600 leading-relaxed max-w-sm">
              Pusat layanan terapi dan stimulasi tumbuh kembang anak terpadu di Balikpapan. Pendekatan ramah anak, komprehensif, dan berbasis bukti klinis.
            </p>
            <div className="pt-1">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-sage-light/60 text-brand-sage-dark px-4 py-2 rounded-xl text-xs font-subheading font-bold hover:bg-brand-sage-light transition-colors border border-brand-sage/20"
              >
                <MessageCircle className="w-4 h-4 text-brand-sage" />
                <span>WhatsApp Resmi: {CLINIC_INFO.whatsapp}</span>
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-heading font-bold text-base text-slate-900">Alamat Klinik</h4>
            <div className="flex items-start gap-2 text-sm font-body text-slate-600">
              <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <span>{CLINIC_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-body text-slate-600">
              <Phone className="w-5 h-5 text-brand-blue shrink-0" />
              <span>{CLINIC_INFO.phone}</span>
            </div>
          </div>

          {/* Col 3 */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-heading font-bold text-base text-slate-900">Jam Layanan</h4>
            <div className="flex items-start gap-2 text-sm font-body text-slate-600">
              <Clock className="w-5 h-5 text-brand-sage shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-semibold text-slate-800">Senin - Sabtu:</span>
                <span>{CLINIC_INFO.hoursWeekday}</span>
                <span className="font-semibold text-slate-800 mt-1">Minggu:</span>
                <span>{CLINIC_INFO.hoursSunday}</span>
              </div>
            </div>
          </div>

          {/* Col 4 */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="font-heading font-bold text-base text-slate-900">Navigasi Cepat</h4>
            <ul className="flex flex-col gap-2 font-subheading text-xs font-semibold text-slate-600">
              <li>
                <a href="#layanan" className="hover:text-brand-blue transition-colors">
                  Layanan Terapi
                </a>
              </li>
              <li>
                <a href="#alur" className="hover:text-brand-blue transition-colors">
                  Alur Konsultasi
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-brand-blue transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenParentPortalModal}
                  className="hover:text-brand-blue transition-colors text-left cursor-pointer"
                >
                  Portal Orang Tua
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-body text-slate-500">
          <p>© 2025 Klinik Tumbuh Kembang Harapanku. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-6 font-subheading font-medium">
            <a href="#" className="hover:text-brand-blue transition-colors">
              Kebijakan Privasi Rekam Medis
            </a>
            <a href="#" className="hover:text-brand-blue transition-colors">
              Syarat &amp; Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
