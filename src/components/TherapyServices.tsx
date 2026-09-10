import React from 'react';
import { THERAPY_PROGRAMS } from '../data/clinicData';
import { Clock, ArrowRight } from 'lucide-react';

interface TherapyServicesProps {
  onSelectConcern: (concern: string) => void;
}

export const TherapyServices: React.FC<TherapyServicesProps> = ({ onSelectConcern }) => {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#f8fafc] border-y border-slate-100" id="layanan">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <span className="font-subheading font-extrabold text-xs tracking-wider uppercase text-brand-blue bg-brand-blue-light px-3.5 py-1 rounded-full inline-block mb-3">
              LAYANAN KLINIS KAMI
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 mb-2">
              Program Terapi Spesifik &amp; Terarah
            </h2>
            <p className="font-body text-sm sm:text-base text-slate-600">
              Metode klinis teruji untuk mendukung kemandirian gerak, komunikasi aktif, dan ketenangan sensorik buah hati Anda.
            </p>
          </div>
          <button
            onClick={() => onSelectConcern('Belum Tahu Pasti / Butuh Observasi Umum')}
            className="inline-flex items-center gap-2 font-subheading font-bold text-sm text-brand-blue hover:text-brand-blue-dark transition-colors self-start md:self-auto cursor-pointer group"
          >
            <span>Daftar Konsultasi Sesi Terapi</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {THERAPY_PROGRAMS.map((prog) => {
            const isBlue = prog.badgeColor === 'blue';

            return (
              <div
                key={prog.id}
                className="bg-white rounded-3xl p-7 border border-slate-150 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full font-subheading font-bold text-xs ${
                        isBlue ? 'bg-brand-blue-light text-brand-blue' : 'bg-brand-sage-light text-brand-sage-dark'
                      }`}
                    >
                      {prog.badge}
                    </span>
                    <span className="font-subheading text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="w-4 h-4 text-slate-400" /> {prog.duration}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">{prog.title}</h3>

                  <p className="font-body text-sm text-slate-600 mb-5 leading-relaxed">
                    {prog.description}
                  </p>

                  <ul className="space-y-2 mb-6 font-body text-sm text-slate-700">
                    {prog.points.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${isBlue ? 'bg-brand-blue' : 'bg-brand-sage'}`}
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectConcern(prog.concernCategory)}
                  className={`inline-flex items-center gap-1.5 font-subheading font-bold text-sm transition-colors pt-2 self-start cursor-pointer group ${
                    isBlue ? 'text-brand-blue hover:text-brand-blue-dark' : 'text-brand-sage-dark hover:text-brand-sage'
                  }`}
                >
                  <span>Konsultasikan Kebutuhan Ini</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
