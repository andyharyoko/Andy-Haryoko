import { TherapyProgram, FacilityItem, AssessmentPackage, FaqItem, ChildProgressProfile } from '../types';

export const CLINIC_INFO = {
  name: 'Harapanku - Klinik Tumbuh Kembang Anak',
  tagline: 'Layanan Terpadu Terapi ABA, Wicara, dan Okupasi di Balikpapan',
  phone: '(0542) 876-209',
  whatsapp: '+62 811-5400-992',
  whatsappRaw: '628115400992',
  address: 'Jl. MT Haryono No. 88, Balikpapan Selatan, Kalimantan Timur 76114',
  hoursWeekday: '08:00 - 17:00 WITA',
  hoursSunday: 'Khusus Reservasi Khusus',
  logoUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1UdiWBriNqA3e99yNcS37f5aJtZhfFqozJjmXHS7knPXKR0kMFMcr24JnfA6EmSB_2tIfHv6kLi_1tQ9-LCwYeWlif1_Nal3Kr9q5LyUKoErCFE1kl4YSYOdX2YmolU6P0KB2mCTWKEckeDxClMWSkHFo8lHe-1QA187QUAuopWcaLQFsmQvbiEZMRKC0o_AIFarXXeRA84k4uUR-dd7WkwPRpL1bEmFm65lGPFXMdsU9xTtAPPdI3wvf8',
  heroImageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1WisafzXmZTEWVilxz-kdBegsDjXqf0Fl7TkH2ldRcVWpRuepyoRJzxVVb8WPV_cJ0uhpZjZWch2UlFSJRwUZL9eVjlMwdG68JQPN9Ql-t99YcUllScUub9_tlkV4nlYajM3EpwslLcDNBa-lu676ly6xZzYB2I1x9tMxjHSCl7sMdFtzL5i7f4e7eGUJVQZvtl3_rs9ia958xSTNg7d8-Tj_bN93-2DyAtQdNb2uPHLih-9yW-6Fz0nQ4',
};

export const THERAPY_PROGRAMS: TherapyProgram[] = [
  {
    id: 'asesmen-awal',
    title: 'Asesmen Awal Komprehensif',
    badge: 'Evaluasi Milestone 360°',
    badgeColor: 'blue',
    duration: '90 Menit',
    description: 'Evaluasi mendalam oleh psikolog anak dan tim multidisiplin untuk mengidentifikasi potensi, milestones, serta hambatan perkembangan sejak dini.',
    points: [
      'Diagnosis komprehensif motorik, wicara, dan kognitif',
      'Rekomendasi kurikulum terapi individual tertulis',
      'Sesi evaluasi dan diskusi mendalam 1-on-1 dengan orang tua'
    ],
    concernCategory: 'Belum Tahu Pasti / Butuh Observasi Umum'
  },
  {
    id: 'terapi-aba',
    title: 'Terapi Perilaku (ABA)',
    badge: 'Modifikasi Perilaku',
    badgeColor: 'sage',
    duration: '60 Menit',
    description: 'Program penguatan perilaku adaptif positif, fokus perhatian, kepatuhan instruksi sederhana, serta pengelolaan emosi dan tantrum dengan pendekatan kasih sayang.',
    points: [
      'Pendekatan positive reinforcement ramah anak',
      'Melatih rentang fokus dan pemahaman instruksi',
      'Stimulasi kesiapan adaptasi di lingkungan sekolah'
    ],
    concernCategory: 'Tantrum & Fokus Perilaku (ABA)'
  },
  {
    id: 'terapi-wicara',
    title: 'Terapi Wicara (Speech Therapy)',
    badge: 'Komunikasi & Bahasa',
    badgeColor: 'blue',
    duration: '45 Menit',
    description: 'Membantu stimulasi kejelasan artikulasi kata, penambahan kosa kata aktif, komunikasi dua arah, dan penguatan otot rongga mulut untuk anak dengan keluhan speech delay.',
    points: [
      'Stimulasi bicara aktif untuk keterlambatan bicara',
      'Koreksi artikulasi fonem dan kejelasan pengucapan',
      'Terapi oral-motorik untuk kesulitan makan (picky eater)'
    ],
    concernCategory: 'Speech Delay / Terlambat Bicara'
  },
  {
    id: 'terapi-okupasi',
    title: 'Terapi Okupasi (Occupational Therapy)',
    badge: 'Sensori & Motorik Halus',
    badgeColor: 'sage',
    duration: '60 Menit',
    description: 'Melatih integrasi sensori motorik, regulasi keseimbangan fisik, stimulasi taktil, serta kemandirian anak dalam aktivitas makan, memakai baju, dan memegang pensil.',
    points: [
      'Regulasi integrasi sensori vestibular dan taktil',
      'Kekuatan genggaman jemari dan koordinasi motorik halus',
      'Kemandirian aktivitas harian (ADL) secara terstruktur'
    ],
    concernCategory: 'Koordinasi Sensori & Motorik (Okupasi)'
  }
];

export const ROADMAP_STEPS = [
  {
    stepNumber: 1,
    badgeText: 'Langkah Pertama',
    title: 'Asesmen Psikologi & Observasi',
    colorClass: 'bg-brand-blue text-white',
    badgeColor: 'text-brand-blue',
    description: 'Pemeriksaan menyeluruh milestone motorik, kognitif, dan wicara bersama psikolog anak di ruang stimulasi yang nyaman dan penuh mainan edukatif.'
  },
  {
    stepNumber: 2,
    badgeText: 'Langkah Kedua',
    title: 'Penyusunan Roadmap Personal',
    colorClass: 'bg-brand-sage text-white',
    badgeColor: 'text-brand-sage-dark',
    description: 'Tim klinis merumuskan target perkembangan spesifik buah hati bersama orang tua, menentukan kombinasi jadwal terapi yang tepat dan proporsional.'
  },
  {
    stepNumber: 3,
    badgeText: 'Langkah Ketiga',
    title: 'Sesi Terapi & Evaluasi Berkala',
    colorClass: 'bg-blue-600 text-white',
    badgeColor: 'text-blue-600',
    description: 'Sesi terapi interaktif 1-on-1 menyenangkan yang selalu tercatat dalam laporan harian, lengkap dengan evaluasi milestone berkala setiap 12 sesi.'
  }
];

export const CLINIC_FACILITIES: FacilityItem[] = [
  {
    id: 'sensori-integrasi',
    title: 'Ruang Sensori Integrasi (SI)',
    tag: 'Sensori Integrasi',
    tagColor: 'bg-brand-sage',
    badgeText: 'Higienis & Aman Standar Medis',
    badgeIcon: 'verified',
    description: 'Lengkap dengan sensory swing, matras pengaman bertaraf medis, dan tactile wall untuk melatih keseimbangan serta regulasi motorik si kecil.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUDvTR99gIcwuWWCxgiVPN3DZU_kTQ_h2dcLJuWqYn5lxwV7lDaGetPmR9LZk1YKdSNpbeAxmX8SvGmnIacekdNGPHH6LgFkxlgyyGZHngv-3SaJuk7pbcV5c0Xpp6nr6L7M093N8PWFhA5EdZDXHDFgPo4yPZHTMi8CnRDd01ORI7Gm0t-iOyyDGZRaI8LocszMaKob7wz6qqH3tBT3E3J702FrA2TG-gX6bm0R1GRL9RwGdohmlQ'
  },
  {
    id: 'wicara-artikulasi',
    title: 'Ruang Terapi Wicara & Artikulasi',
    tag: 'Wicara & Bahasa',
    tagColor: 'bg-brand-blue',
    badgeText: 'Kedap Suara & Bebas Distraksi',
    badgeIcon: 'record_voice_over',
    description: 'Meja ergonomis ramah anak, cermin artikulasi interaktif, flashcards, dan instrumen oral motor dalam lingkungan tenang.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5IUMvNdMMx-sm4GRNYHtbN_tj8y8VnjdTCqVgo40vPIv3SMp0eN5v1Gh-STyd1Zya0ek4Mf-SXP6GPqh-VtVfIFJJlONDKSyNLBkOEdq0O22FBwrBu3mSh-CD4ifp4JA-pXiG9rY6Fkk4UClkhKwnPi6K4JxExgWdTVdpKJbvoKnKuLwi8aa5yxKdGY-6x3mxTukVugd0eQOysCwHnvI-PkqP0RyN-lb1F7Ytqgyai3sQjBiEWgVx'
  },
  {
    id: 'konsultasi-ortu',
    title: 'Ruang Observasi & Konsultasi Ortu',
    tag: 'Konsultasi Keluarga',
    tagColor: 'bg-amber-500',
    badgeText: 'Privasi Terjamin & Nyaman',
    badgeIcon: 'family_restroom',
    description: 'Dilengkapi area bermain Montessori dan sofa nyaman untuk diskusi santai 1-on-1 bersama psikolog anak.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANnGujzmtSaXcyW7MiO68c3LpV45qnoW4p5s-QTXxPmftKlTzAiRXV5SOAeX5zWYsIVOGZ21LZ-3NN6fS70EX0IvSg9E1WcJizllNks_l-dcSqtU7iL-URsfPqUr8Os5tXN8Q7x1qxvWyOZNLuJR4iNB17pEvh9rdedcPKTyKdVHJV46K7Z1oVGWOoB8aQMjMXd1ohEQIC6L1Wl3Qf7t6RWYWjyGDBH35ljWLy2_CL2E4OI-xUkGkZ'
  }
];

export const ASSESSMENT_PACKAGES: AssessmentPackage[] = [
  {
    id: 'basic-screening',
    name: 'Screening Tumbuh Kembang Dasar',
    tier: 'Basic Screening',
    subtitle: 'Ideal untuk deteksi dini tanda-tanda keterlambatan usia 1-4 tahun',
    price: 'Rp 350.000',
    priceUnit: '/ anak (sekali sesi)',
    recommended: false,
    features: [
      'Sesi observasi & skrining motorik-wicara 45 menit',
      'Kuesioner Denver II / M-CHAT terstandar',
      'Ringkasan hasil skrining tertulis dalam format PDF',
      'Konsultasi pengantar 15 menit dengan tim terapis'
    ],
    buttonText: 'Pilih Screening Dasar',
    buttonVariant: 'outline'
  },
  {
    id: 'comprehensive-assessment',
    name: 'Asesmen Komprehensif Multidisiplin',
    tier: 'Comprehensive Assessment',
    subtitle: 'Pemeriksaan mendalam holistik oleh Psikolog Anak & Terapis Spesialis',
    price: 'Rp 750.000',
    priceUnit: '/ anak (paket lengkap)',
    recommended: true,
    features: [
      'Sesi observasi interaktif komprehensif 90 menit (Ruang Sensori & Bermain)',
      'Pemeriksaan 3 aspek: Motorik Sensori, Bahasa-Wicara, & Perilaku Adaptif',
      'Laporan diagnosis klinis lengkap & Roadmap Terapi Personal tertulis',
      'Sesi tatap muka konseling mendalam 1-on-1 dengan Psikolog Anak (30 menit)',
      'Akses gratis 1 bulan Akun Parent Dashboard Real-time'
    ],
    buttonText: 'Jadwalkan Asesmen Lengkap',
    buttonVariant: 'orange'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah ada masa tunggu (waiting list) untuk memulai asesmen atau terapi?',
    answer: 'Di Harapanku, kami berkomitmen zero-waiting-list untuk asesmen awal. Jadwal asesmen dapat dikonfirmasi dalam 1-3 hari kerja sejak pendaftaran online, sehingga intervensi anak tidak tertunda.'
  },
  {
    id: 'faq-2',
    question: 'Bagaimana latar belakang dan sertifikasi para terapis di Harapanku?',
    answer: 'Seluruh tenaga terapis kami (Terapis Wicara, Okupasi, dan Terapi Perilaku/ABA) memiliki Surat Tanda Registrasi (STR) aktif dari Kementerian Kesehatan RI dan lulusan sarjana profesi universitas terkemuka, serta disupervisi langsung oleh Psikolog Klinis Anak tersertifikasi HIMPSI.'
  },
  {
    id: 'faq-3',
    question: 'Berapa usia anak yang dapat mengikuti terapi di Klinik Harapanku?',
    answer: 'Kami melayani anak usia intervensi dini mulai dari 12 bulan (1 tahun) hingga 12 tahun, dengan pendekatan stimulasi bermain yang disesuaikan menurut fase tumbuh kembang masing-masing anak.'
  },
  {
    id: 'faq-4',
    question: 'Apakah orang tua diperbolehkan mendampingi anak selama sesi observasi/terapi?',
    answer: 'Tentu saja! Kami sangat menganut filosofi kolaborasi keluarga. Orang tua dapat mengobservasi secara langsung atau memantau lewat ruang cermin satu arah (one-way mirror) dan rekaman ringkasan di Parent Dashboard.'
  }
];

export const MOCK_CHILD_PROFILE: ChildProgressProfile = {
  name: 'Rafa Al-Fatih',
  age: '3 Th 8 Bln',
  therapies: 'Terapi Wicara & Okupasi',
  status: 'Aktif Berprogres',
  scores: [
    { label: 'Keterampilan Wicara Ekspresif', score: 82, color: 'bg-brand-blue' },
    { label: 'Sensori Integrasi & Fokus', score: 75, color: 'bg-brand-sage' }
  ],
  trend: 'Tren Kemandirian 8 Pekan',
  trendPercentage: '+28% Peningkatan',
  latestNote: {
    time: 'Hari Ini (14:30 WITA)',
    text: '“Ananda Rafa sangat antusias merespon 8 instruksi kata baru dan berhasil menyusun balok bentuk tanpa distraksi.”',
    therapist: 'Kak Sarah, S.Psi.'
  }
};
