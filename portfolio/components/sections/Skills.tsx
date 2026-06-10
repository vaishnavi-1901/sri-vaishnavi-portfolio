import RevealBlock from '@/components/ui/RevealBlock';
import SectionLabel from '@/components/ui/SectionLabel';
import { SKILLS } from '@/lib/data';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.inner}>
        <RevealBlock>
          <SectionLabel text="Technical Skills" />
        </RevealBlock>
        <RevealBlock delay={100}>
          <h2 className={styles.title}>
            My <span className={styles.accent}>Arsenal</span>
          </h2>
        </RevealBlock>

        <div className={styles.grid}>
          {SKILLS.map((group, i) => (
            <RevealBlock key={group.name} delay={i * 80} className={styles.card}>
              <div className={styles.icon}>{group.icon}</div>
              <div className={styles.groupName}>{group.name}</div>
              <div className={styles.tags}>
                {group.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
