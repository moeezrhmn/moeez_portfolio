import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  href,
  className = '',
  ...props
}) => {
  const baseStyles = "px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-center";

  const variants = {
    primary: "bg-accent text-background hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] hover:scale-105",
    secondary: "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-background hover:shadow-[0_0_20px_rgba(0,255,65,0.5)]",
    ghost: "bg-transparent text-foreground hover:bg-[#1a1a1a]"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
