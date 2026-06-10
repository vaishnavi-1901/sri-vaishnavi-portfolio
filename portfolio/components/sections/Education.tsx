import RevealBlock from '@/components/ui/RevealBlock';
import SectionLabel from '@/components/ui/SectionLabel';
import { EDUCATION } from '@/lib/data';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.inner}>
        <RevealBlock>
          <SectionLabel text="Education" />
        </RevealBlock>
        <RevealBlock delay={100}>
          <h2 className={styles.title}>
            Academic <span className={styles.accent}>Journey</span>
          </h2>
        </RevealBlock>

        <div className={styles.list}>
          {EDUCATION.map((edu) => (
            <RevealBlock key={edu.institution} delay={150} className={styles.card}>
              <div className={styles.badge}>🎓</div>
              <div className={styles.body}>
                <div className={styles.degree}>{edu.degree}</div>
                <h3 className={styles.institution}>{edu.institution}</h3>
                <p className={styles.field}>{edu.field}</p>
                <div className={styles.meta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaDot} />
                    {edu.period}
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaDot} />
                    {edu.type}
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaDot} />
                    {edu.location}
                  </div>
                </div>
              </div>
              <div className={styles.glow} />
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
