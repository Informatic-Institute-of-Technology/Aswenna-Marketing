import type { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  onClick?: () => void;
}

export function Card({ children, className, title, onClick }: CardProps) {
  const Component = onClick ? 'button' : 'div';
  
  return (
    <Component
      className={clsx(
        'card',
        onClick && 'cursor-pointer hover:shadow-md transition-shadow',
        className
      )}
      onClick={onClick}
    >
      {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
      {children}
    </Component>
  );
}
