import type { ApiResponse } from "@/app/types";

/**
 * Base URL of the Java Spring Boot backend.
 * Override via NEXT_PUBLIC_API_URL env var.
 */
const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080/api/v1";

// ──────────────────────────────────────────────
//  Token helpers (stored in localStorage)
// ──────────────────────────────────────────────
export const getAccessToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("access_token");
};

export const setAccessToken = (token: string): void => {
  localStorage.setItem("access_token", token);
};

export const clearTokens = (): void => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

// ──────────────────────────────────────────────
//  Core fetch wrapper
// ──────────────────────────────────────────────
interface RequestOptions extends Omit<RequestInit, "body"> {
  body?: unknown;
  auth?: boolean; // attach Bearer token (default: true if token exists)
}

async function request<T>(
  path: string,
  options: RequestOptions = {}
): Promise<ApiResponse<T>> {
  const { body, auth = true, headers = {}, ...rest } = options;

  const token = getAccessToken();
  const authHeader: Record<string, string> =
    auth && token ? { Authorization: `Bearer ${token}` } : {};

  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...authHeader,
      ...(headers as Record<string, string>),
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    ...rest,
  });

  if (!res.ok) {
    // Try to parse error body from Java backend
    const errorData = await res.json().catch(() => ({}));
    throw {
      status: res.status,
      message: errorData?.message ?? `HTTP ${res.status}`,
      errors: errorData?.errors,
    };
  }

  return res.json() as Promise<ApiResponse<T>>;
}

// ──────────────────────────────────────────────
//  Convenience methods
// ──────────────────────────────────────────────
export const api = {
  get: <T>(path: string, opts?: RequestOptions) =>
    request<T>(path, { method: "GET", ...opts }),

  post: <T>(path: string, body: unknown, opts?: RequestOptions) =>
    request<T>(path, { method: "POST", body, ...opts }),

  put: <T>(path: string, body: unknown, opts?: RequestOptions) =>
    request<T>(path, { method: "PUT", body, ...opts }),

  patch: <T>(path: string, body: unknown, opts?: RequestOptions) =>
    request<T>(path, { method: "PATCH", body, ...opts }),

  delete: <T>(path: string, opts?: RequestOptions) =>
    request<T>(path, { method: "DELETE", ...opts }),
};

// ──────────────────────────────────────────────
//  Auth-specific calls (used by login/signup pages)
// ──────────────────────────────────────────────
import type {
  LoginPayload,
  SignupPayload,
  AuthResponse,
} from "@/app/types";

export const authApi = {
  login: (data: LoginPayload) =>
    api.post<AuthResponse>("/auth/login", data, { auth: false }),

  signup: (data: SignupPayload) =>
    api.post<AuthResponse>("/auth/register", data, { auth: false }),

  logout: () => api.post<null>("/auth/logout", {}),
};
