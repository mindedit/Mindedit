"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const FRAME_COUNT = 220;
/** Native frame size of the exported sequence */
const FRAME_ASPECT = 1280 / 720; // 16:9

function frameSrc(index: number) {
  const n = String(index + 1).padStart(6, "0");
  return `/hero-section/frame_${n}.jpg`;
}

type Props = {
  progress: number;
  className?: string;
  /** contain = full frame visible (correct ratio); cover = fill & crop */
  fit?: "contain" | "cover";
};

/**
 * Scroll-scrubbed 16:9 frame sequence drawn to canvas.
 */
export default function HeroFrameScroll({
  progress,
  className = "",
  fit = "contain",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<(HTMLImageElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const fitRef = useRef(fit);
  const [ready, setReady] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  fitRef.current = fit;

  const frameUrls = useMemo(
    () => Array.from({ length: FRAME_COUNT }, (_, i) => frameSrc(i)),
    []
  );

  useEffect(() => {
    const frameProgress = Math.min(1, progress / 0.72);
    targetFrameRef.current = frameProgress * (FRAME_COUNT - 1);
  }, [progress]);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const img = framesRef.current[index] ?? framesRef.current[0];
    if (!img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (w === 0 || h === 0) return;

    const needW = Math.floor(w * dpr);
    const needH = Math.floor(h * dpr);
    if (canvas.width !== needW || canvas.height !== needH) {
      canvas.width = needW;
      canvas.height = needH;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    // Preserve 16:9 — contain shows full frame; cover fills and crops
    const scale =
      fitRef.current === "cover"
        ? Math.max(w / img.naturalWidth, h / img.naturalHeight)
        : Math.min(w / img.naturalWidth, h / img.naturalHeight);
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
  };

  useEffect(() => {
    let cancelled = false;
    framesRef.current = new Array(FRAME_COUNT).fill(null);
    let loaded = 0;

    const loadOne = (index: number) =>
      new Promise<void>((resolve) => {
        const img = new window.Image();
        img.decoding = "async";
        img.onload = () => {
          if (!cancelled) {
            framesRef.current[index] = img;
            loaded += 1;
            setLoadProgress(loaded / FRAME_COUNT);
          }
          resolve();
        };
        img.onerror = () => resolve();
        img.src = frameUrls[index];
      });

    (async () => {
      await loadOne(0);
      if (cancelled) return;
      setReady(true);
      drawFrame(0);

      const batchSize = 16;
      for (let i = 1; i < FRAME_COUNT; i += batchSize) {
        if (cancelled) return;
        await Promise.all(
          Array.from(
            { length: Math.min(batchSize, FRAME_COUNT - i) },
            (_, k) => loadOne(i + k)
          )
        );
      }
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameUrls]);

  useEffect(() => {
    const tick = () => {
      const target = targetFrameRef.current;
      const current = currentFrameRef.current;
      const next = current + (target - current) * 0.25;
      currentFrameRef.current =
        Math.abs(target - next) < 0.04 ? target : next;

      const frameIndex = Math.round(
        Math.max(0, Math.min(FRAME_COUNT - 1, currentFrameRef.current))
      );
      drawFrame(frameIndex);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className={`relative h-full w-full ${className}`}
      style={{ aspectRatio: undefined }}
      data-frame-aspect={FRAME_ASPECT}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        aria-label="Animated landscape sequence"
        role="img"
      />
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#EDE6DC]">
          <div className="h-1 w-28 overflow-hidden rounded-full bg-black/10">
            <div
              className="h-full rounded-full bg-[#B37550] transition-[width] duration-200"
              style={{ width: `${Math.max(8, loadProgress * 100)}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
