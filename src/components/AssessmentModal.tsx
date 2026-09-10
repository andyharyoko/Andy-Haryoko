import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { X, Calendar, CheckCircle2, MessageCircle, HeartHandshake } from 'lucide-react';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedConcern?: string;
  preselectedPackage?: string;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
  preselectedConcern,
  preselectedPackage,
}) => {
  const [parentName, setParentName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [concern, setConcern] = useState(preselectedConcern || 'Speech Delay / Terlambat Bicara');
  const [pkg, setPkg] = useState(preselectedPackage || 'Asesmen Komprehensif Multidisiplin');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync state if props change when opening
  React.useEffect(() => {
    if (preselectedConcern) setConcern(preselectedConcern);
    if (preselectedPackage) setPkg(preselectedPackage);
  }, [preselectedConcern, preselectedPackage]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWaMessage = () => {
    const text = `Halo Admin Klinik Harapanku Balikpapan,%0A%0ASaya ingin menjadwalkan Asesmen Awal untuk buah hati saya:%0A- Nama Orang Tua: ${encodeURIComponent(
      parentName || 'Ayah/Bunda'
    )}%0A- Usia Anak: ${encodeURIComponent(childAge || '-')}%0A- Fokus Keluhan: ${encodeURIComponent(
      concern
    )}%0A- Paket Dipilih: ${encodeURIComponent(pkg)}%0A- No. WhatsApp: ${encodeURIComponent(
      phone || '-'
    )}%0A%0AMohon info ketersediaan slot jadwal pekan ini. Terima kasih.`;
    return `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="p-2 rounded-xl bg-amber-50 text-brand-orange">
                <Calendar className="w-5 h-5 text-brand-orange" />
              </span>
              <span className="font-subheading text-xs font-bold text-brand-sage-dark uppercase tracking-wider">
                Reservasi Asesmen Awal
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-1">
              Jadwalkan Konsultasi Buah Hati
            </h3>
            <p className="font-body text-xs sm:text-sm text-slate-600 mb-6">
              Tim psikolog dan terapis Harapanku siap membantu mendampingi setiap milestone penting anak Anda.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-subheading font-bold text-xs text-slate-700 mb-1.5">
                  Nama Orang Tua (Ayah / Bunda) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Bunda Nadia"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-subheading font-bold text-xs text-slate-700 mb-1.5">
                    Usia Buah Hati *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: 2 thn 8 bln"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                  />
                </div>
                <div>
                  <label className="block font-subheading font-bold text-xs text-slate-700 mb-1.5">
                    Nomor WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812-xxxx-xxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block font-subheading font-bold text-xs text-slate-700 mb-1.5">
                  Fokus Perkembangan / Keluhan Utama
                </label>
                <select
                  value={concern}
                  onChange={(e) => setConcern(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue bg-white"
                >
                  <option value="Speech Delay / Terlambat Bicara">Speech Delay / Terlambat Bicara</option>
                  <option value="Tantrum & Fokus Perilaku (ABA)">Tantrum, Sulit Fokus, atau Perilaku (ABA)</option>
                  <option value="Koordinasi Sensori & Motorik (Okupasi)">
                    Koordinasi Sensori &amp; Motorik Halus (Okupasi)
                  </option>
                  <option value="Belum Tahu Pasti / Butuh Observasi Umum">
                    Belum Tahu Pasti / Butuh Observasi Umum
                  </option>
                </select>
              </div>

              <div>
                <label className="block font-subheading font-bold text-xs text-slate-700 mb-1.5">
                  Paket Asesmen yang Diminati
                </label>
                <select
                  value={pkg}
                  onChange={(e) => setPkg(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-body focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue bg-white"
                >
                  <option value="Asesmen Komprehensif Multidisiplin (Rp 750.000)">
                    Asesmen Komprehensif Multidisiplin (Rp 750.000) - Terlengkap
                  </option>
                  <option value="Screening Tumbuh Kembang Dasar (Rp 350.000)">
                    Screening Tumbuh Kembang Dasar (Rp 350.000)
                  </option>
                </select>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-subheading font-extrabold text-base py-3.5 px-6 rounded-2xl shadow-[0_6px_20px_rgba(245,166,35,0.35)] transition-all cursor-pointer"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Kirim &amp; Hubungkan ke Jadwal</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs font-body text-slate-500 pt-1">
                <HeartHandshake className="w-4 h-4 text-brand-sage" />
                <span>Privasi data medis buah hati terjamin aman &amp; rahasia.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-brand-sage-light text-brand-sage-dark flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-brand-sage" />
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-2">
              Terima Kasih, {parentName || 'Ayah/Bunda'}!
            </h3>

            <p className="font-body text-sm text-slate-600 mb-6 max-w-sm mx-auto leading-relaxed">
              Data reservasi Anda untuk ananda ({childAge}) telah kami terima. Tim admin kami akan segera menghubungi nomor <strong>{phone}</strong> untuk konfirmasi tanggal &amp; jam slot asesmen.
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 mb-6 text-left border border-slate-100 text-xs font-body text-slate-700 space-y-1.5">
              <div>
                <strong>Fokus:</strong> {concern}
              </div>
              <div>
                <strong>Paket:</strong> {pkg}
              </div>
              <div>
                <strong>Lokasi:</strong> Klinik Harapanku, Jl. MT Haryono No. 88 Balikpapan
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={generateWaMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-sage hover:bg-brand-sage-dark text-white font-subheading font-bold text-sm py-3.5 px-6 rounded-2xl shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Konfirmasi Langsung via WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs font-subheading font-bold text-slate-500 hover:text-slate-800 transition-colors py-2 cursor-pointer"
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
