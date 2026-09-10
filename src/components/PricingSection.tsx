import React from 'react';
import { ASSESSMENT_PACKAGES } from '../data/clinicData';
import { CheckCircle2, Star, Calendar, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#f8fafc] border-y border-slate-100" id="paket-asesmen">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-subheading font-extrabold text-xs tracking-wider uppercase text-brand-blue bg-brand-blue-light px-3.5 py-1 rounded-full inline-block mb-3">
            Investasi Tumbuh Kembang Buah Hati
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-3 tracking-tight">
            Pilihan Paket Asesmen Awal yang Transparan
          </h2>
          <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
            Tanpa biaya tersembunyi. Dapatkan evaluasi objektif dan rencana penanganan berbasis bukti klinis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {ASSESSMENT_PACKAGES.map((pkg) => {
            const isFeatured = pkg.recommended;

            return (
              <div
                key={pkg.id}
                className={`bg-white rounded-3xl p-7 sm:p-8 relative flex flex-col justify-between transition-all ${
                  isFeatured
                    ? 'border-2 border-brand-blue shadow-[0_16px_40px_rgba(74,144,226,0.09)]'
                    : 'border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 right-6 bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-subheading font-bold shadow-sm flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span>Paling Direkomendasikan</span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <span
                      className={`px-3.5 py-1 rounded-full font-subheading font-bold text-xs inline-block mb-2 ${
                        isFeatured ? 'bg-brand-blue-light text-brand-blue' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {pkg.tier}
                    </span>
                    <h3 className="font-heading font-bold text-2xl text-slate-900 mb-1">{pkg.name}</h3>
                    <p className="font-body text-xs text-slate-500">{pkg.subtitle}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-slate-100 flex items-baseline gap-2">
                    <span className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
                      {pkg.price}
                    </span>
                    <span className="font-subheading text-xs font-semibold text-slate-500">
                      {pkg.priceUnit}
                    </span>
                  </div>

                  <ul className="space-y-3.5 mb-8 font-body text-sm text-slate-700">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`w-5 h-5 shrink-0 mt-0.5 ${
                            isFeatured ? 'text-brand-sage-dark' : 'text-brand-blue'
                          }`}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {isFeatured ? (
                  <button
                    onClick={() => onSelectPackage(pkg.name)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-subheading font-bold text-sm py-3.5 px-6 rounded-2xl shadow-[0_6px_20px_rgba(245,166,35,0.35)] hover:shadow-[0_8px_24px_rgba(245,166,35,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>{pkg.buttonText}</span>
                  </button>
                ) : (
                  <button
                    onClick={() => onSelectPackage(pkg.name)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue-light hover:bg-brand-blue text-brand-blue hover:text-white font-subheading font-bold text-sm py-3.5 px-6 rounded-2xl transition-all cursor-pointer border border-brand-blue-light group"
                  >
                    <span>{pkg.buttonText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
