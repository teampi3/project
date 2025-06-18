import { cn } from '@/shared/lib/tailwind-merge'
import type { IconProps } from '../icon'

export type ButtonIconProps = Omit<IconProps, 'children'> & {
  icon: React.ElementType<IconProps>
  size?: 'small' | 'medium' | 'large'
}

export function ButtonIcon({
  icon: Icon,
  size = 'medium',
  ...rest
}: ButtonIconProps) {
  return (
    <Icon
      className={cn(
        size === 'small' && 'p-4',
        size === 'medium' && 'p-3.5',
        size === 'large' && 'p-3',
        rest.className,
      )}
    />
  )
}
