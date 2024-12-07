import { cn } from '@/lib/utils';
import { forwardRef, type TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
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