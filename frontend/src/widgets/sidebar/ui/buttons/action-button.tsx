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
    <Button.Root
      {...rest}
      variant="icon"
      size="small"
      className="focus-visible:outline-none focus-visible:bg-gray-100 hover:bg-gray-100"
    >
      <Button.Icon icon={icon} />
    </Button.Root>
  )
}
