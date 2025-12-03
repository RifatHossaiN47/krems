import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  asLink?: boolean;
  href?: string;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  asLink = false,
  href,
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 transition-all duration-200 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[var(--color-teal-500)] text-white hover:bg-[var(--color-teal-600)] focus:ring-[var(--color-teal-500)] shadow-md hover:shadow-lg active:scale-[0.98]',
    secondary: 'bg-[var(--color-orange-500)] text-white hover:bg-[var(--color-orange-600)] focus:ring-[var(--color-orange-500)] shadow-md hover:shadow-lg active:scale-[0.98]',
    ghost: 'bg-transparent text-[var(--color-navy-800)] border-2 border-[var(--color-navy-800)] hover:bg-[var(--color-navy-800)] hover:text-white focus:ring-[var(--color-navy-800)] active:scale-[0.98]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (asLink && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
