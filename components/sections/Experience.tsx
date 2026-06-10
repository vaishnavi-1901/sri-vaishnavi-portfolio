import RevealBlock from '@/components/ui/RevealBlock';
import SectionLabel from '@/components/ui/SectionLabel';
import { EXPERIENCE } from '@/lib/data';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.inner}>
        <RevealBlock>
          <SectionLabel text="Experience" />
        </RevealBlock>
        <RevealBlock delay={100}>
          <h2 className={styles.title}>
            Where I&apos;ve <span className={styles.accent}>Contributed</span>
          </h2>
        </RevealBlock>

        <div className={styles.list}>
          {EXPERIENCE.map((exp, i) => (
            <RevealBlock key={exp.role + exp.company} delay={i * 100} className={styles.card}>
              <div className={styles.timeline}>
                <div className={styles.dot} />
                <div className={styles.line} />
              </div>
              <div className={styles.body}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.company}>{exp.company}</div>
                  </div>
                  <div className={styles.period}>{exp.period}</div>
                </div>
                <ul className={styles.points}>
                  {exp.points.map((point) => (
                    <li key={point}>
                      <span className={styles.bullet}>▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
