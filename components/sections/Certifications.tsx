import RevealBlock from '@/components/ui/RevealBlock';
import SectionLabel from '@/components/ui/SectionLabel';
import { CERTIFICATIONS } from '@/lib/data';
import styles from './Certifications.module.css';

export default function Certifications() {
  return (
    <section id="certifications" className={styles.certifications}>
      <div className={styles.inner}>
        <RevealBlock>
          <SectionLabel text="Certifications" />
        </RevealBlock>
        <RevealBlock delay={100}>
          <h2 className={styles.title}>
            Validated <span className={styles.accent}>Expertise</span>
          </h2>
        </RevealBlock>

        <div className={styles.grid}>
          {CERTIFICATIONS.map((cert, i) => (
            <RevealBlock key={cert.name} delay={i * 80} className={styles.card}>
              <div className={styles.icon}>{cert.icon}</div>
              <div className={styles.name}>{cert.name}</div>
              <div className={styles.badge}>{cert.issuer}</div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
