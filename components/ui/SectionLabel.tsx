import styles from './SectionLabel.module.css';

interface Props {
  text: string;
  center?: boolean;
}

export default function SectionLabel({ text, center = false }: Props) {
  return (
    <div className={`${styles.label} ${center ? styles.center : ''}`}>
      <div className={styles.line} />
      <span>{text}</span>
      {center && <div className={styles.line} />}
    </div>
  );
}
