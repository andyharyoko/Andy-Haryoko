export interface TherapyProgram {
  id: string;
  title: string;
  badge: string;
  badgeColor: 'blue' | 'sage';
  duration: string;
  description: string;
  points: string[];
  concernCategory: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  badgeText: string;
  badgeIcon: string;
  description: string;
  imageUrl: string;
}

export interface AssessmentPackage {
  id: string;
  name: string;
  tier: string;
  subtitle: string;
  price: string;
  priceUnit: string;
  recommended?: boolean;
  features: string[];
  buttonText: string;
  buttonVariant: 'orange' | 'outline';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ChildProgressProfile {
  name: string;
  age: string;
  therapies: string;
  status: string;
  scores: {
    label: string;
    score: number;
    color: string;
  }[];
  trend: string;
  trendPercentage: string;
  latestNote: {
    time: string;
    text: string;
    therapist: string;
  };
}

export interface AssessmentFormData {
  parentName: string;
  childAge: string;
  concern: string;
  phone: string;
  selectedPackage?: string;
}
