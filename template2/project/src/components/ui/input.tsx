import { cn } from '@/lib/utils';
import { forwardRef, type InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'w-full px-4 py-2 border rounded-lg transition-colors focus:outline-none focus:ring-2',
          {
            'border-gray-300 focus:ring-forest-500 focus:border-forest-500': !error,
            'border-red-500 focus:ring-red-500 focus:border-red-500': error,
          },
          className
        )}
        {...props}
      />
    );
  }
);