"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${menuOpen ? styles.menuStateOpen : ""}`}>
      <nav className={`container ${styles.nav}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} id="nav-logo" onClick={closeMenu}>
          <span className={styles.logoIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z"
                stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              />
              <path
                d="M16 7V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V7"
                stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              />
              <path d="M12 12V16" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 12H16" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="gradient-text">JobBoard</span>
        </Link>

        {/* Desktop links */}
        <ul className={styles.links}>
          <li><Link href="/#features"    className={styles.link}>Features</Link></li>
          <li><Link href="/#how-it-works" className={styles.link}>How It Works</Link></li>
          <li><Link href="/jobs"          className={styles.link}>Browse Jobs</Link></li>
        </ul>

        {/* Desktop CTA */}
        <div className={styles.actions}>
          <ThemeToggle />
          <Link href="/login"  className="btn btn-outline btn-sm" id="nav-login-btn">Log In</Link>
          <Link href="/signup" className="btn btn-primary btn-sm" id="nav-signup-btn">Get Started</Link>
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="nav-hamburger"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu (Drawer) */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        {/* Backdrop (Inside the fixed container for clean layering) */}
        {menuOpen && <div className={styles.mobileBackdrop} onClick={closeMenu} />}
        
        <div className={styles.mobileDrawerContent}>
          <div className={styles.mobileNavLinks}>
            <Link href="/#features"     onClick={closeMenu}>Features</Link>
            <Link href="/#how-it-works" onClick={closeMenu}>How It Works</Link>
            <Link href="/jobs"          onClick={closeMenu}>Browse Jobs</Link>
          </div>
          
          <div className={styles.mobileActions}>
            <div className={styles.mobileThemeRow}>
              <span>Switch Theme</span>
              <ThemeToggle />
            </div>
            <Link href="/login"  className="btn btn-outline btn-lg" onClick={closeMenu}>Log In</Link>
            <Link href="/signup" className="btn btn-primary btn-lg" onClick={closeMenu}>Get Started</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
