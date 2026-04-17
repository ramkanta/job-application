import styles from "./Features.module.css";

const features = [
  {
    icon: "🔍",
    title: "Smart Job Matching",
    desc: "Our AI-powered engine matches you with roles that align with your skills, experience, and career goals — no more scrolling endlessly.",
    color: "#6366F1",
  },
  {
    icon: "⚡",
    title: "One-Click Apply",
    desc: "Save your profile once and apply to hundreds of jobs in seconds. Your information auto-fills, so you never repeat yourself.",
    color: "#10B981",
  },
  {
    icon: "📊",
    title: "Application Tracker",
    desc: "Visualize every stage of your pipeline — from applied to offered. Never lose track of where you stand with any company.",
    color: "#F59E0B",
  },
  {
    icon: "🏢",
    title: "Verified Companies",
    desc: "Every employer on our platform is verified. Browse real jobs from companies you can trust, with transparent review scores.",
    color: "#8B5CF6",
  },
  {
    icon: "🔔",
    title: "Real-Time Alerts",
    desc: "Get instant notifications when a recruiter views your profile, shortlists you, or schedules an interview.",
    color: "#EF4444",
  },
  {
    icon: "📝",
    title: "Resume Builder",
    desc: "Build an ATS-optimised resume in minutes using our guided builder with modern, professionally designed templates.",
    color: "#06B6D4",
  },
];

export default function Features() {
  return (
    <section className={`section ${styles.section}`} id="features">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className="badge badge-accent">✦ Features</div>
          <h2 className={styles.title}>
            Everything You Need to
            <br />
            <span className="gradient-text">Land Your Dream Job</span>
          </h2>
          <p className={styles.subtitle}>
            From discovery to offer letter, every tool you need is built right in.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.card} style={{ "--accent": f.color } as React.CSSProperties}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{f.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
              <span className={styles.arrow}>→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
