import React from 'react';
import { ROADMAP_STEPS } from '../data/clinicData';
import { CheckCircle2 } from 'lucide-react';

export const TherapyRoadmap: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-white" id="alur">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-subheading font-extrabold text-xs tracking-wider uppercase text-brand-sage-dark bg-brand-sage-light px-3.5 py-1 rounded-full inline-block mb-3">
            ALUR TERAPI KAMI
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 mb-3">
            3 Langkah Mudah Menuju Tumbuh Kembang Optimal
          </h2>
          <p className="font-body text-slate-600 text-sm sm:text-base">
            Prosedur terstruktur yang ramah anak dan sepenuhnya transparan bagi keluarga.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {ROADMAP_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-[#f8fafc] rounded-3xl p-7 border border-slate-100 flex flex-col relative hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className={`w-11 h-11 rounded-2xl font-heading font-bold text-lg flex items-center justify-center shadow-sm ${step.colorClass}`}
                >
                  {step.stepNumber}
                </span>
                <span className={`font-subheading text-xs font-bold ${step.badgeColor}`}>
                  {step.badgeText}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">{step.title}</h3>
              <p className="font-body text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-subheading text-xs sm:text-sm font-semibold text-slate-500 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-brand-sage fill-brand-sage-light" />
            <span>Semua catatan sesi dapat langsung diakses orang tua di hari yang sama via Parent Dashboard</span>
          </p>
        </div>
      </div>
    </section>
  );
};
