// ──────────────────────────────────────────────
//  USER / AUTH
// ──────────────────────────────────────────────
export interface User {
  id: string;
  name: string;
  email: string;
  mobile: string;
  role: "APPLICANT" | "RECRUITER" | "ADMIN";
  avatarUrl?: string;
  createdAt: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupPayload {
  name: string;
  email: string;
  mobile: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  tokens: AuthTokens;
}

// ──────────────────────────────────────────────
//  JOB
// ──────────────────────────────────────────────
export type JobType = "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "REMOTE";
export type ExperienceLevel = "ENTRY" | "MID" | "SENIOR" | "LEAD";

export interface Company {
  id: string;
  name: string;
  logoUrl?: string;
  industry: string;
  location: string;
}

export interface Job {
  id: string;
  title: string;
  company: Company;
  location: string;
  type: JobType;
  experienceLevel: ExperienceLevel;
  salaryMin?: number;
  salaryMax?: number;
  currency?: string;
  description: string;
  requirements: string[];
  benefits?: string[];
  postedAt: string;
  deadline?: string;
  isActive: boolean;
}

// ──────────────────────────────────────────────
//  APPLICATION
// ──────────────────────────────────────────────
export type ApplicationStatus =
  | "APPLIED"
  | "UNDER_REVIEW"
  | "SHORTLISTED"
  | "INTERVIEW_SCHEDULED"
  | "OFFERED"
  | "REJECTED"
  | "WITHDRAWN";

export interface Application {
  id: string;
  job: Job;
  applicant: User;
  status: ApplicationStatus;
  resumeUrl: string;
  coverLetter?: string;
  appliedAt: string;
  updatedAt: string;
}

// ──────────────────────────────────────────────
//  API GENERIC
// ──────────────────────────────────────────────
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
