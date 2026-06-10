import RevealBlock from '@/components/ui/RevealBlock';
import SectionLabel from '@/components/ui/SectionLabel';
import { PROJECTS } from '@/lib/data';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>
        <RevealBlock>
          <SectionLabel text="Featured Work" />
        </RevealBlock>
        <RevealBlock delay={100}>
          <h2 className={styles.title}>
            Projects That <span className={styles.accent}>Matter</span>
          </h2>
        </RevealBlock>

        <div className={styles.list}>
          {PROJECTS.map((project, i) => (
            <RevealBlock key={project.name} delay={i * 100} className={styles.card}>
              <div className={styles.cardBody}>
                <div className={styles.meta}>
                  <span className={styles.number}>{project.number}</span>
                  <span className={styles.category}>{project.category}</span>
                </div>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.features}>
                  {project.features.map((f) => (
                    <span key={f} className={styles.chip}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.arrow}
                aria-label={`View ${project.name} on GitHub`}
              >
                →
              </a>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
