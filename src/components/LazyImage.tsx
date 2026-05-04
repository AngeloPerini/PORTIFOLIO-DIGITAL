import { useMemo, useState } from 'react';
import { cn } from '../utils/cn';
import { getFallbackImage } from '../utils/portfolio';

type LazyImageProps = {
  src?: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  fallbackSeed: string;
};

export default function LazyImage({ src, alt, className, wrapperClassName, fallbackSeed }: LazyImageProps) {
  const fallbackSource = useMemo(() => getFallbackImage(fallbackSeed), [fallbackSeed]);
  const [currentSource, setCurrentSource] = useState(src ?? fallbackSource);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn('relative overflow-hidden rounded-[28px]', wrapperClassName)}>
      <div
        className={cn(
          'absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),rgba(255,255,255,0.12),rgba(255,255,255,0.03))] bg-[length:200%_100%] animate-[shimmer_2s_infinite] transition-opacity duration-500',
          loaded ? 'opacity-0' : 'opacity-100',
        )}
      />
      <img
        src={currentSource}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setCurrentSource(fallbackSource)}
        className={cn(
          'h-full w-full object-cover object-top transition duration-700',
          loaded ? 'scale-100 opacity-100' : 'scale-[1.02] opacity-0',
          className,
        )}
      />
    </div>
  );
}
