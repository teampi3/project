import { Button } from '@/shared/ui/button'
import type { IconProps } from '@/shared/ui/icon'

export type ActionButtonProps = Omit<
  React.ComponentProps<'button'>,
  'children'
> & {
  icon: React.ElementType<IconProps>
}

export function ActionButton({ icon, ...rest }: ActionButtonProps) {
  return (
    <Button.Root {...rest} variant="icon" className="btn-common">
      <Button.Icon icon={icon} />
    </Button.Root>
  )
}
