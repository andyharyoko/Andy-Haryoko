import React, { useState } from 'react';
import { MOCK_CHILD_PROFILE } from '../data/clinicData';
import { Smartphone, CheckCircle2, Eye, ShieldCheck, Video, Calendar, Sparkles } from 'lucide-react';

interface ParentDashboardSectionProps {
  onOpenPortalModal: () => void;
}

export const ParentDashboardSection: React.FC<ParentDashboardSectionProps> = ({ onOpenPortalModal }) => {
  const [activeTab, setActiveTab] = useState<'radar' | 'session' | 'targets'>('radar');

  return (
    <section className="w-full py-16 sm:py-20 bg-[#1e293b] text-slate-100 relative overflow-hidden" id="dashboard">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-brand-sage/15 blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-blue/20 text-blue-300 font-subheading font-bold text-xs mb-4">
              <Smartphone className="w-4 h-4 text-blue-400" />
              <span>TEKNOLOGI TRANSPARAN</span>
            </span>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4 leading-tight">
              Pantau progres anak Anda secara real-time dari mana saja
            </h2>

            <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Orang tua tidak perlu lagi bingung apa yang dipelajari si kecil saat sesi berlangsung. Akses catatan harian terapis, grafik milestone motorik, video observasi, dan jadwal terapi langsung dari genggaman Anda.
            </p>

            <div className="space-y-3 mb-8 w-full font-body text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-sage fill-brand-sage/20 shrink-0" />
                <span>Grafik perkembangan kompetensi motorik &amp; wicara mingguan</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-sage fill-brand-sage/20 shrink-0" />
                <span>Catatan evaluasi harian (Daily Therapy Log) dari terapis</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-sage fill-brand-sage/20 shrink-0" />
                <span>Konsultasi chat personal dengan supervisor klinis</span>
              </div>
            </div>

            <button
              onClick={onOpenPortalModal}
              className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-subheading font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md cursor-pointer group"
            >
              <Eye className="w-4 h-4 text-brand-blue group-hover:scale-110 transition-transform" />
              <span>Konsultasikan Akses Dashboard</span>
            </button>
          </div>

          {/* Right Column: Interactive Mockup */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white text-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-700/30">
              {/* Mockup Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue-light text-brand-blue flex items-center justify-center font-heading font-bold text-sm shadow-inner">
                    RF
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-800 text-base leading-tight">
                      {MOCK_CHILD_PROFILE.name} ({MOCK_CHILD_PROFILE.age})
                    </h4>
                    <span className="font-body text-xs text-slate-500">{MOCK_CHILD_PROFILE.therapies}</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-brand-sage-light text-brand-sage-dark text-xs font-subheading font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-sage animate-pulse" />
                  {MOCK_CHILD_PROFILE.status}
                </span>
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-2 pb-3 mb-4 overflow-x-auto text-xs font-subheading font-bold">
                <button
                  onClick={() => setActiveTab('radar')}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === 'radar'
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Milestone Radar
                </button>
                <button
                  onClick={() => setActiveTab('session')}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === 'session'
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Sesi Terakhir
                </button>
                <button
                  onClick={() => setActiveTab('targets')}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === 'targets'
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Target Bulan Ini
                </button>
              </div>

              {/* Tab 1: Milestone Radar */}
              {activeTab === 'radar' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  {/* Progress Bars */}
                  <div className="space-y-3.5">
                    <div>
                      <div className="flex justify-between text-xs font-subheading font-bold mb-1">
                        <span className="text-slate-700">Keterampilan Wicara Ekspresif</span>
                        <span className="text-brand-blue">82%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full bg-brand-blue rounded-full transition-all duration-700"
                          style={{ width: '82%' }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-subheading font-bold mb-1">
                        <span className="text-slate-700">Sensori Integrasi &amp; Fokus</span>
                        <span className="text-brand-sage-dark">75%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full bg-brand-sage rounded-full transition-all duration-700"
                          style={{ width: '75%' }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sparkline SVG */}
                  <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-subheading text-xs text-slate-500 font-semibold">
                        Tren Kemandirian 8 Pekan
                      </span>
                      <span className="font-subheading text-xs text-brand-sage-dark font-bold">
                        +28% Peningkatan
                      </span>
                    </div>
                    <svg
                      className="w-full h-12 text-brand-blue"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 300 50"
                    >
                      <path
                        d="M0,42 Q40,36 75,32 T150,22 T225,14 T300,6"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                      />
                      <path
                        d="M0,42 Q40,36 75,32 T150,22 T225,14 T300,6 L300,50 L0,50 Z"
                        fill="currentColor"
                        fillOpacity="0.1"
                      />
                      <circle cx="300" cy="6" fill="currentColor" r="3.5" />
                    </svg>
                  </div>

                  {/* Daily Activity Log */}
                  <div className="bg-white rounded-2xl p-3 border border-slate-150 flex items-start gap-3 shadow-xs">
                    <ShieldCheck className="w-5 h-5 text-brand-sage shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="font-subheading text-xs text-slate-800 font-bold">
                        Catatan Sesi Hari Ini (14:30 WITA):
                      </span>
                      <p className="font-body text-xs text-slate-600 mt-0.5">
                        “Ananda Rafa sangat antusias merespon 8 instruksi kata baru dan berhasil menyusun balok bentuk tanpa distraksi.”
                      </p>
                      <span className="font-subheading text-[11px] text-brand-blue font-semibold mt-1">
                        Terapis: Kak Sarah, S.Psi.
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Sesi Terakhir */}
              {activeTab === 'session' && (
                <div className="space-y-3.5 animate-in fade-in duration-300">
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-xs">
                    <div className="flex items-center justify-between font-subheading font-bold text-slate-700 mb-2">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-brand-blue" />
                        Sesi ke-14: Terapi Wicara &amp; Sensori
                      </span>
                      <span className="text-slate-500">14:30 - 15:30 WITA</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-3 font-body">
                      Fokus sesi: Artikulasi fonem /b/, /m/, /p/ serta latihan keseimbangan pada sensory swing matras. Respon kontak mata meningkat hingga 85%.
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-slate-500">
                      <span className="font-semibold text-slate-700">Ruang Terapi: Ruang SI &amp; Wicara 1</span>
                      <span className="text-brand-sage-dark font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Evaluasi Selesai
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-brand-blue-light/50 rounded-2xl border border-brand-blue/20 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs">
                      <Video className="w-4 h-4 text-brand-blue" />
                      <span className="font-subheading font-bold text-slate-800">
                        Cuplikan Video Observasi (2 Menit)
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-brand-blue bg-white px-2 py-0.5 rounded shadow-xs">
                      Tersedia
                    </span>
                  </div>
                </div>
              )}

              {/* Tab 3: Target Bulan Ini */}
              {activeTab === 'targets' && (
                <div className="space-y-3 animate-in fade-in duration-300 text-xs">
                  <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-subheading font-bold text-emerald-950 block">
                        Kemandirian Memakai Sepatu Perekat
                      </span>
                      <span className="text-emerald-700 text-[11px]">
                        Target tercapai 100% pada pekan ke-2 tanpa bantuan terapis.
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <div className="w-full">
                      <div className="flex justify-between font-subheading font-bold text-slate-800 mb-1">
                        <span>Mengucapkan 15 Kata Benda Baru</span>
                        <span className="text-brand-blue">13 / 15 Kata (87%)</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-200">
                        <div className="h-full bg-brand-blue rounded-full" style={{ width: '87%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div className="w-full">
                      <div className="flex justify-between font-subheading font-bold text-slate-800 mb-1">
                        <span>Regulasi Emosi Saat Transisi Mainan</span>
                        <span className="text-amber-600">Progres 75%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-200">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: '75%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
