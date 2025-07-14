import { cn } from '@/shared/lib/tailwind-merge'

export type ButtonRootProps = React.ComponentProps<'button'> & {
  variant?: 'default' | 'icon'
  size?: 'small' | 'medium' | 'large'
}

export function ButtonRoot({
  variant = 'default',
  size = 'medium',
  children,
  ...rest
}: ButtonRootProps) {
  return (
    <button
      {...rest}
      className={cn(
        'inline-flex items-center justify-center cursor-pointer rounded transition-colors',
        variant === 'default' && size === 'small' && 'h-8 px-3 text-sm',
        variant === 'default' && size === 'medium' && 'h-10 px-4 text-base',
        variant === 'default' && size === 'large' && 'h-12 px-6 text-lg',
        variant === 'icon' && size === 'small' && 'size-13',
        variant === 'icon' && size === 'medium' && 'size-14',
        variant === 'icon' && size === 'large' && 'size-15',
        rest.className,
      )}
    >
      {children}
    </button>
  )
}
