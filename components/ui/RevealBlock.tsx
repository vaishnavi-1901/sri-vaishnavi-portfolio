'use client';

import { useInView } from '@/lib/hooks';
import styles from './RevealBlock.module.css';

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function RevealBlock({ children, delay = 0, className = '' }: Props) {
  const { ref, inView } = useInView(0.12);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${styles.block} ${inView ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
