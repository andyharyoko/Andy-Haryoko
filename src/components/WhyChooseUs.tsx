import React from 'react';
import { Users, LineChart, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-white" id="keunggulan">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-subheading font-extrabold text-xs tracking-wider uppercase text-brand-blue bg-brand-blue-light px-3.5 py-1 rounded-full inline-block mb-3">
            KEUNGGULAN HARAPANKU
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 mb-3">
            Mengapa Ratusan Orang Tua Mempercayakan Buah Hatinya Kepada Kami?
          </h2>
          <p className="font-body text-slate-600 text-sm sm:text-base">
            Pendekatan holistik yang dirancang secara personal dan berorientasi jangka panjang untuk setiap tahapan usia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="bg-[#f8fafc] hover:bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(74,144,226,0.09)] hover:-translate-y-1 transition-all flex flex-col items-start group">
            <div className="w-13 h-13 p-3 rounded-2xl bg-brand-blue-light text-brand-blue flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">
              Terapi Terintegrasi Komprehensif
            </h3>
            <p className="font-body text-sm text-slate-600 leading-relaxed">
              Layanan menyeluruh meliputi Terapi ABA (Perilaku), Wicara, dan Okupasi dalam satu roadmap terpadu tanpa penanganan yang terpisah-pisah, sehingga kemajuan stimulasi lebih terarah.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f8fafc] hover:bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(124,169,130,0.12)] hover:-translate-y-1 transition-all flex flex-col items-start group">
            <div className="w-13 h-13 p-3 rounded-2xl bg-brand-sage-light text-brand-sage flex items-center justify-center mb-5 group-hover:bg-brand-sage group-hover:text-white transition-all shadow-sm">
              <LineChart className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">
              Parent Dashboard Terbuka
            </h3>
            <p className="font-body text-sm text-slate-600 leading-relaxed">
              Pemantauan progres anak secara berkala dan real-time langsung melalui smartphone atau laptop Anda tanpa jeda informasi, memberi rasa tenang bagi Ayah dan Bunda.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f8fafc] hover:bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(74,144,226,0.09)] hover:-translate-y-1 transition-all flex flex-col items-start group">
            <div className="w-13 h-13 p-3 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">
              Terapis Tersertifikasi &amp; Hangat
            </h3>
            <p className="font-body text-sm text-slate-600 leading-relaxed">
              Didukung oleh psikolog anak dan tenaga terapis lulusan terbaik dengan lisensi resmi, mengutamakan pendekatan bermain yang menyenangkan tanpa rasa takut bagi si kecil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
