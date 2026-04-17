import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";

export const metadata: Metadata = {
  title: "JobBoard — Find Your Dream Job",
  description:
    "Discover thousands of job opportunities, apply with ease, and track your applications all in one place.",
  keywords: ["jobs", "careers", "job search", "hiring", "recruitment"],
};

/**
 * Inline script injected into <head> before any CSS paint.
 * This completely prevents the white-flash / FOUC on first load.
 *
 * Priority:  1. localStorage  →  2. OS prefers-color-scheme  →  3. "dark"
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('jobboard-theme');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored);
      return;
    }
  } catch (e) {}
  /* Default: always dark unless the user has explicitly chosen light */
  document.documentElement.setAttribute('data-theme', 'dark');
})();
`.trim();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Flash-prevention: runs synchronously before first paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
