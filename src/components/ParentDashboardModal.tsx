import React from 'react';
import { CLINIC_INFO, MOCK_CHILD_PROFILE } from '../data/clinicData';
import { X, Smartphone, Download, MessageCircle, Sparkles, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';

interface ParentDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestAccess: () => void;
}

export const ParentDashboardModal: React.FC<ParentDashboardModalProps> = ({
  isOpen,
  onClose,
  onRequestAccess,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <span className="p-2 rounded-xl bg-blue-50 text-brand-blue">
            <Smartphone className="w-5 h-5 text-brand-blue" />
          </span>
          <span className="font-subheading text-xs font-bold text-brand-blue uppercase tracking-wider">
            Harapanku Parent Portal
          </span>
        </div>

        <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-1">
          Demo Fitur Portal Orang Tua
        </h3>
        <p className="font-body text-xs sm:text-sm text-slate-600 mb-6">
          Dirancang agar orang tua selalu terinformasi mengenai setiap kemajuan kecil buah hati setiap harinya.
        </p>

        {/* Mock Portal Card */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 mb-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-heading font-bold text-base shadow-sm">
                RF
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-base">
                  {MOCK_CHILD_PROFILE.name} ({MOCK_CHILD_PROFILE.age})
                </h4>
                <p className="font-body text-xs text-slate-500">
                  ID Pasien: #HRP-2025-089 • Terapis Utama: Kak Sarah, S.Psi.
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-subheading font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Sesi Berjalan Lancar
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
              <span className="font-subheading text-xs text-slate-500 font-semibold block mb-1">
                Total Sesi Bulan Ini
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-extrabold text-2xl text-brand-blue">8 / 8</span>
                <span className="text-xs text-emerald-600 font-bold">100% Kehadiran</span>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
              <span className="font-subheading text-xs text-slate-500 font-semibold block mb-1">
                Evaluasi Milestone Triwulan
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-extrabold text-2xl text-brand-sage-dark">+28%</span>
                <span className="text-xs text-slate-500">di atas rata-rata fase</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs font-subheading font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-brand-blue" />
                Catatan Harian &amp; Homework Stimulasi di Rumah
              </span>
              <span className="text-slate-400">10 Sep 2025</span>
            </div>
            <p className="font-body text-xs text-slate-600 leading-relaxed">
              “Latihan artikulasi huruf vokal dan konsonan bilabial /m/ dan /b/. Di rumah Ayah/Bunda disarankan mengajak ananda meniup gelembung sabun 5-10 menit per hari untuk melatih otot bibir.”
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onRequestAccess();
            }}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-subheading font-bold text-sm py-3.5 px-6 rounded-2xl shadow-sm transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Daftar Asesmen untuk Dapatkan Akun</span>
          </button>

          <a
            href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=Halo%20Admin%20Harapanku,%20saya%20tertarik%20mencoba%20fitur%20Parent%20Dashboard%20pemantauan%20terapi.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-700 hover:bg-slate-50 font-subheading font-bold text-sm py-3.5 px-5 rounded-2xl border border-slate-200 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-brand-sage" />
            <span>Tanya Admin</span>
          </a>
        </div>
      </div>
    </div>
  );
};
