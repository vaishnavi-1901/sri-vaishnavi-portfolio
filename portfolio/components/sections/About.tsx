import RevealBlock from '@/components/ui/RevealBlock';
import SectionLabel from '@/components/ui/SectionLabel';
import { PROFILE } from '@/lib/data';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <RevealBlock>
          <SectionLabel text="About Me" />
        </RevealBlock>

        <div className={styles.grid}>
          <RevealBlock className={styles.textCol}>
            <h2 className={styles.title}>
              Crafting the future with{' '}
              <span className={styles.accent}>AI &amp; Code</span>
            </h2>
            <p className={styles.body}>{PROFILE.summary}</p>
            <p className={styles.body}>
              From building smart agriculture platforms to hospitality sentiment
              engines, I love creating software that makes a genuine difference —
              elegant, purposeful, and impactful.
            </p>
            <div className={styles.college}>🎓 {PROFILE.college}</div>
          </RevealBlock>

          <div className={styles.statsGrid}>
            {PROFILE.stats.map((s, i) => (
              <RevealBlock key={s.label} delay={i * 80} className={styles.statCard}>
                <div className={styles.statNumber}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
