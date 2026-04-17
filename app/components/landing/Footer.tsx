import Link from "next/link";
import styles from "./Footer.module.css";

const links = {
  Product: ["Browse Jobs", "For Employers", "Resume Builder", "Salary Insights"],
  Company: ["About Us", "Blog", "Press", "Careers"],
  Support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 7V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V7" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12V16" stroke="#818CF8" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 12H16" stroke="#818CF8" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="gradient-text" style={{ fontSize: "1.15rem", fontWeight: 800 }}>JobBoard</span>
          </Link>
          <p className={styles.tagline}>
            Connecting talent with opportunity. Find your next great role or your next great hire.
          </p>
          {/* Social icons */}
          <div className={styles.socials}>
            {["𝕏", "in", "f", "▶"].map((s, i) => (
              <a key={i} href="#" className={styles.socialBtn} aria-label={`social-${i}`}>{s}</a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(links).map(([group, items]) => (
          <div key={group} className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>{group}</h4>
            <ul className={styles.linkList}>
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className={styles.footerLink}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <p className={styles.copyright}>
            © {new Date().getFullYear()} JobBoard Inc. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
