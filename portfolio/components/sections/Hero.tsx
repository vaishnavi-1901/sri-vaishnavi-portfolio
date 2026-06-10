'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './Hero.module.css';
import { PROFILE } from '@/lib/data';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [videoError, setVideoError] = useState(false);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const videoFrameRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const videoSrc = '/hero.mp4';

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(eyebrowRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.7 }, 0.4)
      .fromTo(nameRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9 }, 0.65)
      .fromTo(roleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.9)
      .fromTo(ctaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, 1.1)
      .fromTo(socialsRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.25)
      .fromTo(videoFrameRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 1 }, 0.55)
      .fromTo(scrollHintRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.5);

    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;

          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {
              // Autoplay policies may block sound, but resume logic remains.
            });
          } else {
            videoRef.current.pause();
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section id="hero" ref={sectionRef} className={styles.hero}>
      <div className={styles.heroOverlay} />
      {/* Left */}
      <div className={styles.left}>
        <div ref={eyebrowRef} className={styles.eyebrow}>
          <span className={styles.pulse} />
          <span>Available for opportunities</span>
        </div>

        <h1 ref={nameRef} className={styles.name}>
          <span className={styles.nameLine}>Sri Vaishnavi</span>
          <span className={`${styles.nameLine} ${styles.accent}`}>Inukonda</span>
        </h1>

        <p ref={roleRef} className={styles.role}>
          B.Tech Computer Science · AI &amp; Full-Stack Developer
          <br />
          {PROFILE.tagline}
        </p>

        <div ref={ctaRef} className={styles.cta}>
          <a href="#projects" className={styles.btnPrimary}>
            View My Work →
          </a>
          <a href="#contact" className={styles.btnGhost}>
            Get In Touch
          </a>
        </div>

        <div ref={socialsRef} className={styles.socials}>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email">
            <EmailIcon />
          </a>
        </div>
      </div>

      {/* Right — video */}
      <div ref={videoFrameRef} className={styles.right}>
        <div className={styles.videoFrame}>
          <div className={styles.videoGlow} />
          <div className={styles.videoBorder}>
            <div className={styles.cornerTL} />
            <div className={styles.cornerBR} />
          </div>
          {!videoError ? (
            <video
              ref={videoRef}
              className={styles.video}
              src={videoSrc}
              autoPlay
              loop
              playsInline
              preload="metadata"
              onError={handleVideoError}
            />
          ) : (
            <div className={styles.videoFallback} aria-hidden="true" />
          )}
        </div>
      </div>

      {/* Scroll hint */}
      <div ref={scrollHintRef} className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
