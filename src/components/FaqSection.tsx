import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/clinicData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-white" id="faq">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-subheading font-extrabold text-xs tracking-wider uppercase text-brand-blue bg-brand-blue-light px-3.5 py-1 rounded-full inline-block mb-3">
            Bantuan &amp; Informasi
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-3 tracking-tight">
            Pertanyaan Seputar Layanan Harapanku
          </h2>
          <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
            Temukan jawaban atas hal yang paling sering ditanyakan oleh Ayah dan Bunda sebelum memulai proses asesmen.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'bg-white shadow-sm border-slate-200' : 'bg-[#f8fafc] border-slate-100 hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-slate-800">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-blue' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-slate-100 animate-in fade-in-50 duration-200">
                    <p className="font-body text-sm text-slate-600 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
