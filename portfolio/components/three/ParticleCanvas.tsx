'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './ParticleCanvas.module.css';

const PARTICLE_COUNT = 180;
const CONNECTION_DISTANCE = 90;

export default function ParticleCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Scene & Camera ──
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // ── Particles ──
    const positions: number[] = [];
    const velocities: THREE.Vector3[] = [];
    const colors: number[] = [];

    const orangeColor = new THREE.Color(0xff6b35);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 80;
      const y = (Math.random() - 0.5) * 60;
      const z = (Math.random() - 0.5) * 40;
      positions.push(x, y, z);

      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.02
        )
      );

      const isOrange = Math.random() < 0.15;
      const c = isOrange ? orangeColor : whiteColor;
      const alpha = isOrange ? 0.7 : 0.25;
      colors.push(c.r * alpha, c.g * alpha, c.b * alpha);
    }

    const geometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(positions);
    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));

    const material = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // ── Connection Lines ──
    const linePositions = new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 6);
    const lineColors = new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMat = new THREE.LineSegments(
      lineGeo,
      new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.6 })
    );
    scene.add(lineMat);

    // ── Mouse parallax ──
    let mouseX = 0;
    let mouseY = 0;
    const handleMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouse);

    // ── Resize ──
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // ── Animation loop ──
    let frameId: number;
    const pos = geometry.attributes.position as THREE.BufferAttribute;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Move particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        const v = velocities[i];

        (pos.array as Float32Array)[i3] += v.x;
        (pos.array as Float32Array)[i3 + 1] += v.y;
        (pos.array as Float32Array)[i3 + 2] += v.z;

        // Wrap around bounds
        if (Math.abs((pos.array as Float32Array)[i3]) > 40) v.x *= -1;
        if (Math.abs((pos.array as Float32Array)[i3 + 1]) > 30) v.y *= -1;
        if (Math.abs((pos.array as Float32Array)[i3 + 2]) > 20) v.z *= -1;
      }
      pos.needsUpdate = true;

      // Update connections
      let lineIndex = 0;
      const lp = lineGeo.attributes.position as THREE.BufferAttribute;
      const lc = lineGeo.attributes.color as THREE.BufferAttribute;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const i3 = i * 3;
          const j3 = j * 3;
          const dx = (pos.array as Float32Array)[i3] - (pos.array as Float32Array)[j3];
          const dy = (pos.array as Float32Array)[i3 + 1] - (pos.array as Float32Array)[j3 + 1];
          const dz = (pos.array as Float32Array)[i3 + 2] - (pos.array as Float32Array)[j3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < CONNECTION_DISTANCE * 0.4) {
            const alpha = (1 - dist / (CONNECTION_DISTANCE * 0.4)) * 0.15;
            (lp.array as Float32Array)[lineIndex] = (pos.array as Float32Array)[i3];
            (lp.array as Float32Array)[lineIndex + 1] = (pos.array as Float32Array)[i3 + 1];
            (lp.array as Float32Array)[lineIndex + 2] = (pos.array as Float32Array)[i3 + 2];
            (lp.array as Float32Array)[lineIndex + 3] = (pos.array as Float32Array)[j3];
            (lp.array as Float32Array)[lineIndex + 4] = (pos.array as Float32Array)[j3 + 1];
            (lp.array as Float32Array)[lineIndex + 5] = (pos.array as Float32Array)[j3 + 2];

            const r = orangeColor.r * alpha;
            const g = orangeColor.g * alpha;
            const b = orangeColor.b * alpha;
            (lc.array as Float32Array)[lineIndex] = r;
            (lc.array as Float32Array)[lineIndex + 1] = g;
            (lc.array as Float32Array)[lineIndex + 2] = b;
            (lc.array as Float32Array)[lineIndex + 3] = r;
            (lc.array as Float32Array)[lineIndex + 4] = g;
            (lc.array as Float32Array)[lineIndex + 5] = b;
            lineIndex += 6;
          }
        }
      }
      lp.needsUpdate = true;
      lc.needsUpdate = true;
      lineGeo.setDrawRange(0, lineIndex / 3);

      // Mouse parallax on camera
      camera.position.x += (mouseX * 3 - camera.position.x) * 0.02;
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      lineGeo.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className={styles.canvas} />;
}
