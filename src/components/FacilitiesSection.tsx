import React from 'react';
import { CLINIC_FACILITIES } from '../data/clinicData';
import { ShieldCheck, Mic, HeartHandshake } from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-white border-t border-slate-100" id="fasilitas">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-subheading font-extrabold text-xs tracking-wider uppercase text-brand-sage-dark bg-brand-sage-light px-3.5 py-1 rounded-full inline-block mb-3">
            FASILITAS KLINIK
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-3 tracking-tight">
            Fasilitas Ramah Anak &amp; Nyaman Seperti di Rumah
          </h2>
          <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
            Ruang terapi dirancang khusus dengan standar higienis dan terapeutik internasional agar anak merasa riang dan bebas dari rasa cemas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLINIC_FACILITIES.map((facility, idx) => (
            <div
              key={facility.id}
              className="bg-[#f8fafc] rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={facility.imageUrl}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-subheading font-bold text-slate-700 shadow-sm flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${facility.tagColor}`} />
                  {facility.tag}
                </span>
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                    {facility.title}
                  </h3>
                  <p className="font-body text-sm text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div
                  className={`pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-subheading font-semibold ${
                    idx === 1 ? 'text-brand-blue' : 'text-brand-sage-dark'
                  }`}
                >
                  {idx === 0 && <ShieldCheck className="w-4 h-4" />}
                  {idx === 1 && <Mic className="w-4 h-4" />}
                  {idx === 2 && <HeartHandshake className="w-4 h-4" />}
                  <span>{facility.badgeText}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
