import Link from "next/link";
import styles from "./Hero.module.css";

const stats = [
  { value: "50K+", label: "Active Jobs" },
  { value: "12K+", label: "Companies" },
  { value: "250K+", label: "Hired This Year" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      <div className={`container ${styles.content}`}>
        {/* Badge */}
        <div className="badge badge-accent anim-fade-up" style={{ animationDelay: "0.1s" }}>
          <span>✦</span>
          <span>#1 Job Platform for 2025</span>
        </div>

        {/* Headline */}
        <h1 className={`${styles.headline} anim-fade-up`} style={{ animationDelay: "0.2s" }}>
          Find Your Next
          <br />
          <span className="gradient-text">Dream Career</span>
        </h1>

        {/* Subtitle */}
        <p className={`${styles.subtitle} anim-fade-up`} style={{ animationDelay: "0.3s" }}>
          Connect with top companies, apply in seconds, and track every step of
          your journey — all in one powerful platform.
        </p>

        {/* Search bar */}
        <div className={`${styles.searchBar} anim-fade-up`} style={{ animationDelay: "0.4s" }}>
          <div className={styles.searchField}>
            <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              id="hero-search-job"
              type="text"
              placeholder="Job title, keywords..."
              className={styles.searchInput}
            />
          </div>
          <div className={styles.searchDivider} />
          <div className={styles.searchField}>
            <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            <input
              id="hero-search-location"
              type="text"
              placeholder="Location or Remote"
              className={styles.searchInput}
            />
          </div>
          <button className={`btn btn-primary ${styles.searchBtn}`} id="hero-search-btn">
            Search Jobs
          </button>
        </div>

        {/* Popular tags */}
        <div className={`${styles.tags} anim-fade-up`} style={{ animationDelay: "0.5s" }}>
          <span className={styles.tagsLabel}>Popular:</span>
          {["Frontend Dev", "Product Manager", "Data Scientist", "UX Designer", "DevOps"].map((tag) => (
            <button key={tag} className={styles.tag}>{tag}</button>
          ))}
        </div>

        {/* Stats */}
        <div className={`${styles.stats} anim-fade-up`} style={{ animationDelay: "0.6s" }}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating card decoration */}
      <div className={`${styles.floatingCard} anim-fade-in`} style={{ animationDelay: "0.8s" }}>
        <div className={styles.floatingCardInner}>
          <div className={styles.companyLogo}>G</div>
          <div>
            <p className={styles.jobTitle}>Senior Frontend Engineer</p>
            <p className={styles.company}>Google · Remote</p>
          </div>
          <span className={styles.salaryTag}>$140K/yr</span>
        </div>
      </div>
    </section>
  );
}
