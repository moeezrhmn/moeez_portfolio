import Image from 'next/image';

/**
 * A hard 1px frame with a brass outline offset behind it. The CSS filter
 * pulls the photograph's saturation down enough to sit inside the palette
 * rather than shout over it.
 */
export function Portrait({
  variant = 'framed',
  className = '',
  priority = false,
}: {
  variant?: 'framed' | 'plain';
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`${variant === 'framed' ? 'portrait' : 'portrait-sm'} ${className}`.trim()}>
      <Image
        src="/profile.jpeg"
        alt="Moeez Rehman, Full Stack AI Engineer, photographed outdoors in Lahore"
        width={1002}
        height={1001}
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
    </div>
  );
}
