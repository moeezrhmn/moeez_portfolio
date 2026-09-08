import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  /** `primary` is the filled brass button; `secondary` the hairline ghost. */
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const styles: Record<string, string> = {
  primary: 'btn grp',
  secondary: 'btn-ghost grp',
  // A text link that borrows the arrow motif rather than a third button shape.
  ghost: 'grp meta !text-brass inline-flex items-center gap-2',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  href,
  external = false,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const cls = `${styles[variant]} ${className}`.trim();

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    ) : (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
};
