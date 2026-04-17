import styles from "./HowItWorks.module.css";

const steps = [
  {
    num: "01",
    title: "Create Your Profile",
    desc: "Sign up in 60 seconds. Fill in your skills, upload your resume, and set your career preferences. Your profile is your passport.",
    icon: "👤",
  },
  {
    num: "02",
    title: "Discover Matched Jobs",
    desc: "Browse curated job listings matched to your profile, or search by role, company, salary, or location. Filter exactly what you want.",
    icon: "🔍",
  },
  {
    num: "03",
    title: "Apply Instantly",
    desc: "Hit apply and we pre-fill everything from your profile. Add a custom cover letter or go with your saved one. Done in seconds.",
    icon: "⚡",
  },
  {
    num: "04",
    title: "Track & Get Hired",
    desc: "Follow every application in your dashboard. Get notified at every stage — shortlist, interview, and offer. Celebrate your win!",
    icon: "🎉",
  },
];

export default function HowItWorks() {
  return (
    <section className={`section ${styles.section}`} id="how-it-works">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className="badge badge-accent">✦ Process</div>
          <h2 className={styles.title}>
            Get Hired in
            <span className="gradient-text"> 4 Simple Steps</span>
          </h2>
          <p className={styles.subtitle}>
            No complexity, no confusion. Just a clear path from profile to paycheck.
          </p>
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={i} className={styles.step}>
              {/* connector line */}
              {i < steps.length - 1 && <div className={styles.connector} />}

              <div className={styles.stepCard}>
                <div className={styles.numBadge}>{step.num}</div>
                <div className={styles.iconCircle}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaOrb} />
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to start? It&apos;s free.</h3>
            <p className={styles.ctaText}>
              Join 250,000+ professionals already using JobBoard to grow their careers.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a href="/signup" className="btn btn-primary btn-lg" id="hiw-cta-signup">
              Create Free Account
            </a>
            <a href="/jobs" className="btn btn-outline btn-lg" id="hiw-cta-browse">
              Browse Jobs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
