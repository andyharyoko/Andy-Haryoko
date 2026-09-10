import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Calendar, CheckCircle2, MessageCircle, Star, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenAssessmentModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAssessmentModal }) => {
  return (
    <section className="relative w-full py-12 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-[#f3f8fd] via-white to-transparent">
      {/* Soft Ambient Background Blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-sage-light/80 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Sage Green Trust Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sage-light border border-brand-sage/20 text-brand-sage-dark font-subheading font-bold text-xs sm:text-sm mb-5 shadow-sm">
              <span className="material-symbols-outlined text-[18px] text-brand-sage fill-1">verified</span>
              <span>Terakreditasi &amp; Lingkungan Ramah Anak di Balikpapan</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-slate-900 tracking-tight leading-[1.2] mb-5">
              Ketahui Kebutuhan Tumbuh Kembang Anak Anda Hari Ini.
            </h1>

            <p className="font-body text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
              Tanpa antrean berbulan-bulan. Layanan terpadu{' '}
              <span className="font-semibold text-slate-800">Terapi ABA, Wicara, dan Okupasi</span>{' '}
              dengan pemantauan data transparan terintegrasi langsung untuk ketenangan pikiran orang tua.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-9">
              <button
                onClick={onOpenAssessmentModal}
                className="inline-flex items-center justify-center gap-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-subheading font-extrabold text-base px-8 py-4 rounded-2xl shadow-[0_8px_24px_rgba(245,166,35,0.38)] hover:shadow-[0_12px_28px_rgba(245,166,35,0.48)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Jadwalkan Asesmen Awal Sekarang</span>
              </button>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-blue font-subheading font-bold text-base px-6 py-4 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-brand-blue/30"
              >
                <MessageCircle className="w-5 h-5 text-brand-sage" />
                <span>Tanya via WhatsApp</span>
              </a>
            </div>

            {/* Credibility Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 border-t border-slate-200/80 w-full text-slate-600 text-xs sm:text-sm font-subheading font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-sage fill-brand-sage-light" />
                <span>Dokter &amp; Psikolog Anak</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-sage fill-brand-sage-light" />
                <span>Laporan Digital Real-Time</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-sage fill-brand-sage-light" />
                <span>Pendekatan Penuh Kasih</span>
              </div>
            </div>
          </div>

          {/* Right Column: Warm Visual with Soft Organic Blob Shapes */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Soft Organic Playful Blobs behind Photo */}
            <div className="absolute -inset-6 sm:-inset-10 -z-10 flex items-center justify-center pointer-events-none">
              {/* Pastel Blue Blob */}
              <div className="w-80 h-80 sm:w-[420px] sm:h-[420px] bg-gradient-to-tr from-brand-blue-light via-blue-100 to-sky-50 rounded-[45%_55%_65%_35%/50%_45%_55%_50%] opacity-90 blur-sm blob-animate" />
              {/* Sage Green Accent Shape */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 sm:w-56 sm:h-56 bg-gradient-to-br from-brand-sage-light to-[#d8edd9] rounded-full opacity-80 blur-[2px]" />
              {/* Gentle Pastel Floating Rings & Circles */}
              <svg className="absolute -top-6 -right-6 w-32 h-32 text-amber-200 opacity-60" fill="none" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeDasharray="8 6" strokeWidth="6" />
              </svg>
              <div className="absolute top-1/3 -right-3 w-6 h-6 rounded-full bg-brand-sage/40" />
              <div className="absolute -bottom-4 right-1/4 w-5 h-5 rounded-full bg-brand-blue/30" />
            </div>

            {/* Main Photo Container with Warm Rounded Border */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative rounded-[2.25rem] overflow-hidden p-2.5 bg-white shadow-[0_16px_40px_rgba(37,99,235,0.08)] ring-1 ring-slate-100">
                <img
                  src={CLINIC_INFO.heroImageUrl}
                  alt="Terapis ramah Harapanku membimbing stimulasi sensori anak"
                  className="w-full h-auto aspect-[4/3] object-cover rounded-[1.85rem]"
                />
              </div>

              {/* Reassuring Floating Review Badge */}
              <div className="absolute -bottom-5 -left-4 sm:left-2 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.09)] border border-slate-100 flex items-center gap-3 max-w-[270px]">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-brand-orange flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-brand-orange" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-heading font-bold text-slate-800 text-base leading-none">4.9 / 5.0</span>
                    <div className="flex text-brand-orange">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-brand-orange text-brand-orange" />
                      ))}
                    </div>
                  </div>
                  <span className="font-subheading text-xs text-slate-500 font-semibold mt-0.5">
                    Kepuasan 350+ Orang Tua
                  </span>
                </div>
              </div>

              {/* Available Schedule Tag */}
              <div className="hidden sm:flex absolute -top-3 -right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-slate-100 items-center gap-2">
                <div className="relative flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-sage animate-ping opacity-75" />
                  <span className="w-2 h-2 rounded-full bg-brand-sage absolute" />
                </div>
                <span className="font-subheading font-bold text-xs text-slate-700">Slot Asesmen Pekan Ini Siap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
