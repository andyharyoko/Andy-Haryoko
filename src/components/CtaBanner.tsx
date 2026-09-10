import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Calendar, MessageCircle, Clock } from 'lucide-react';

interface CtaBannerProps {
  onOpenAssessmentModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenAssessmentModal }) => {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#f8fafc]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="bg-gradient-to-r from-blue-50 via-[#eff6ff] to-emerald-50/50 border border-blue-100 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-sm">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <span className="px-4 py-1 rounded-full bg-white text-brand-blue font-subheading font-bold text-xs mb-3 shadow-xs border border-blue-100">
              Langkah Awal Penuh Harapan
            </span>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-3 tracking-tight">
              Beri Hadiah Terbaik untuk Masa Depan Buah Hati Anda
            </h2>

            <p className="font-body text-slate-600 text-sm sm:text-base mb-8 max-w-xl leading-relaxed">
              Intervensi sedini mungkin membawa dampak perubahan optimal bagi kemandirian dan kebahagiaan anak. Amankan jadwal observasi awal bersama tim dokter dan psikolog kami hari ini.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
              {/* Golden Orange CTA Button */}
              <button
                onClick={onOpenAssessmentModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-subheading font-extrabold text-base px-8 py-4 rounded-2xl shadow-[0_8px_24px_rgba(245,166,35,0.35)] hover:shadow-[0_12px_28px_rgba(245,166,35,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Daftar Asesmen Awal Sekarang</span>
              </button>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-brand-sage-dark hover:bg-slate-50 font-subheading font-bold text-base px-6 py-4 rounded-2xl border border-slate-200 shadow-sm transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-brand-sage" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>

            <p className="font-subheading text-xs font-semibold text-slate-500 flex items-center justify-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Slot asesmen tatap muka dibatasi per hari demi menjaga keheningan &amp; kenyamanan anak.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
