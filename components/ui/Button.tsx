import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark-outline';
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const styles = {
  primary:
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-xl shadow-[0_2px_12px_rgba(234,88,12,0.35)] hover:bg-orange-600 hover:shadow-[0_4px_20px_rgba(234,88,12,0.5)] active:scale-95 transition-all duration-200 text-sm',
  secondary:
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-foreground font-semibold rounded-xl border border-gray-200 shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:border-accent/40 hover:text-accent active:scale-95 transition-all duration-200 text-sm',
  ghost:
    'inline-flex items-center justify-center gap-2 px-4 py-2.5 text-accent font-medium rounded-xl hover:bg-accent/10 active:scale-95 transition-all duration-200 text-sm',
  'dark-outline':
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/15 hover:bg-white/20 active:scale-95 transition-all duration-200 text-sm',
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
  const cls = `${styles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return (
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
