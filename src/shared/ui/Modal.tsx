import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '@/lib/cn';

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  /** Width preset — most astrology surfaces feel right at md/lg. */
  size?: 'sm' | 'md' | 'lg';
};

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
} as const;

/**
 * Portaled dialog with focus-return and Escape-to-close.
 * Intentionally simple; swap for a headless library if requirements grow
 * (nested modals, drawer variants, etc.).
 */
export default function Modal({
  open,
  onClose,
  title,
  description,
  children,
  className,
  size = 'md',
}: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-cosmic-950/70 backdrop-blur-sm"
      />
      <div
        className={cn(
          'relative w-full animate-fade-in glass-strong rounded-3xl p-6',
          sizeClasses[size],
          className,
        )}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 rounded-full p-1 text-starlight-muted transition hover:bg-white/5 hover:text-starlight"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>
        {title && <h2 className="font-serif text-2xl">{title}</h2>}
        {description && (
          <p className="mt-1 text-sm text-starlight-muted">{description}</p>
        )}
        <div className={cn(title || description ? 'mt-5' : '')}>{children}</div>
      </div>
    </div>,
    document.body,
  );
}
