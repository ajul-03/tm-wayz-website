import React, { useEffect, useRef, useState, useCallback } from 'react';
import './IntroSequence.css';

const TOTAL_FRAMES = 300;
const TARGET_FPS = 36; // ~8.3 seconds total duration for 300 frames

const getFramePath = (index) => {
  const paddedNumber = String(index).padStart(3, '0');
  return `/images/herosection/ezgif-frame-${paddedNumber}.png`;
};

const IntroSequence = ({ onComplete }) => {
  const canvasRef = useRef(null);
  const [frameIndex, setFrameIndex] = useState(1);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReadyToPlay, setIsReadyToPlay] = useState(false);

  const imagesRef = useRef([]);
  const currentFrameRef = useRef(1);
  const animFrameIdRef = useRef(null);
  const isFinishedRef = useRef(false);

  // Helper to render frame onto canvas maintaining cover aspect ratio
  const renderFrame = useCallback((img) => {
    const canvas = canvasRef.current;
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const imgWidth = img.naturalWidth || img.width;
    const imgHeight = img.naturalHeight || img.height;
    
    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = width / height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawHeight = height;
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Handle Resize and DPR scaling
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }

    const currentImg = imagesRef.current[currentFrameRef.current - 1];
    if (currentImg) {
      renderFrame(currentImg);
    }
  }, [renderFrame]);

  // Finish intro with smooth fade-out
  const finishIntro = useCallback(() => {
    if (isFinishedRef.current) return;
    isFinishedRef.current = true;

    if (animFrameIdRef.current) {
      cancelAnimationFrame(animFrameIdRef.current);
    }

    setIsFadingOut(true);

    setTimeout(() => {
      document.body.style.overflow = '';
      if (onComplete) {
        onComplete();
      }
    }, 800);
  }, [onComplete]);

  // Progressive Preloading of Frames
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    imagesRef.current = new Array(TOTAL_FRAMES);

    let mounted = true;
    let initialCount = 0;

    // Load initial buffer batch (first 25 frames) first so playback starts fast
    const loadInitialBatch = async () => {
      const initialPromises = [];
      for (let i = 1; i <= Math.min(25, TOTAL_FRAMES); i++) {
        const p = new Promise((resolve) => {
          const img = new Image();
          img.src = getFramePath(i);
          img.onload = () => {
            if (mounted) {
              imagesRef.current[i - 1] = img;
              initialCount++;
              setLoadedCount(initialCount);
            }
            resolve();
          };
          img.onerror = resolve;
        });
        initialPromises.push(p);
      }

      await Promise.all(initialPromises);
      if (mounted) {
        setIsReadyToPlay(true);
        // Load remaining frames in background
        loadRemainingFrames();
      }
    };

    const loadRemainingFrames = () => {
      for (let i = 26; i <= TOTAL_FRAMES; i++) {
        if (!mounted) break;
        const img = new Image();
        img.src = getFramePath(i);
        img.onload = () => {
          if (mounted) {
            imagesRef.current[i - 1] = img;
            setLoadedCount((prev) => prev + 1);
          }
        };
      }
    };

    loadInitialBatch();

    return () => {
      mounted = false;
      document.body.style.overflow = '';
    };
  }, []);

  // Handle Resize Events
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Key press listener (Escape or Space to skip)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ') {
        e.preventDefault();
        finishIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [finishIntro]);

  // Main Animation Loop
  useEffect(() => {
    if (!isReadyToPlay) return;

    let lastTime = performance.now();
    const frameInterval = 1000 / TARGET_FPS;

    const loop = (now) => {
      if (isFinishedRef.current) return;

      const elapsed = now - lastTime;

      if (elapsed >= frameInterval) {
        lastTime = now - (elapsed % frameInterval);

        const currentFrame = currentFrameRef.current;
        const img = imagesRef.current[currentFrame - 1];

        if (img) {
          renderFrame(img);
          setFrameIndex(currentFrame);
        }

        if (currentFrame < TOTAL_FRAMES) {
          currentFrameRef.current = currentFrame + 1;
        } else {
          finishIntro();
          return;
        }
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isReadyToPlay, renderFrame, finishIntro]);

  // Progress percentage for preloading
  const progressPercent = Math.min(100, Math.round((loadedCount / TOTAL_FRAMES) * 100));

  return (
    <div className={`intro-container ${isFadingOut ? 'fade-out' : ''}`}>
      <canvas ref={canvasRef} className="intro-canvas" />

      <div className="intro-overlay" />

      {/* Skip Button */}
      <button className="skip-button" onClick={finishIntro} aria-label="Skip Intro">
        Skip <span className="skip-icon">➔</span>
      </button>

      {/* Preloading indicator line before sequence plays */}
      {!isReadyToPlay && (
        <div className="intro-progress-bar" style={{ width: `${progressPercent}%` }} />
      )}
    </div>
  );
};

export default IntroSequence;
