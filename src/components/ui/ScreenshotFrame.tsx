import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

interface ScreenshotFrameProps {
  label: string;
  caption?: string;
  src?: string;
  /** Natural width/height of `src` — prevents layout shift (CLS). */
  width?: number;
  height?: number;
  videoSrc?: string;
  /** Still frame shown while the video loads and for reduced-motion users. */
  poster?: string;
  alt?: string;
  aspectRatio?: string;
  /**
   * Percentage of the image height hidden at the top — used to crop
   * browser chrome accidentally captured in raw screenshots (e.g. "10%").
   */
  cropTop?: string;
}

function DemoVideo({ src, poster, alt }: { src: string; poster?: string; alt: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      if (!videoRef.current) return;
      if (reducedMotion.matches) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };
    sync();
    reducedMotion.addEventListener('change', sync);
    return () => reducedMotion.removeEventListener('change', sync);
  }, []);

  const toggle = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative group/media">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        className="w-full h-auto block"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? `Pause ${alt}` : `Play ${alt}`}
        className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[#0B1F2A]/80 text-white flex items-center justify-center opacity-0 group-hover/media:opacity-100 focus-visible:opacity-100 transition-opacity"
      >
        {isPlaying ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
      </button>
    </div>
  );
}

/**
 * Frame for genuine product media: renders a real screenshot (`src`) or demo
 * clip (`videoSrc`) when provided, otherwise a neutral placeholder with no
 * fabricated data. `cropTop` trims browser chrome from raw captures.
 */
export default function ScreenshotFrame({
  label,
  caption,
  src,
  width,
  height,
  videoSrc,
  poster,
  alt,
  aspectRatio = 'aspect-[16/10]',
  cropTop,
}: ScreenshotFrameProps) {
  const hasMedia = Boolean(src || videoSrc);

  const image = src ? (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt ?? label}
      className="w-full h-auto block"
      style={cropTop ? { marginTop: `-${cropTop}` } : undefined}
      loading="lazy"
      decoding="async"
    />
  ) : null;

  return (
    <figure>
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-card overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-soft-white dark:bg-gray-800">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600" aria-hidden="true" />
          <span className="ml-3 text-xs text-slate dark:text-gray-400 font-medium truncate">{label}</span>
        </div>
        {videoSrc ? (
          <DemoVideo src={videoSrc} poster={poster} alt={alt ?? label} />
        ) : image ? (
          cropTop ? (
            <div className="overflow-hidden">{image}</div>
          ) : (
            image
          )
        ) : (
          <div
            className={`${aspectRatio} bg-gradient-to-br from-[#0B1F2A] to-[#334155] dark:from-gray-800 dark:to-gray-900 flex flex-col items-center justify-center gap-3 p-8 text-center`}
            role="img"
            aria-label={alt ?? `${label} — product screenshot placeholder`}
          >
            <img
              src="/SafeOps_logo_Dark.svg"
              width={1000}
              height={1000}
              alt=""
              aria-hidden="true"
              className="h-10 w-auto opacity-90"
            />
            <p className="text-gray-300 text-sm font-medium max-w-xs">SafeOps HSE product screenshot</p>
          </div>
        )}
      </div>
      {caption && !hasMedia && (
        <figcaption className="mt-3 text-sm text-slate dark:text-gray-400 text-center">{caption}</figcaption>
      )}
    </figure>
  );
}
