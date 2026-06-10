import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Crafted with <span className={styles.heart}>♥</span> by Sri Vaishnavi Inukonda · © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
