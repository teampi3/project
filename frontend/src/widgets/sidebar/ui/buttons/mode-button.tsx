import { useAtom } from 'jotai'
import { modeAtom } from '../../model/store'
import { Button } from '@/shared/ui/button'
import type { Mode } from '../../model/types'
import type { IconProps } from '@/shared/ui/icon'

export type ModeButtonProps = {
  mode: Mode
  icon: React.ElementType<IconProps>
}

export function ModeButton({ mode, icon }: ModeButtonProps) {
  const [currentMode, setMode] = useAtom(modeAtom)
  return (
    <Button.Root
      variant="icon"
      size="small"
      className={
        currentMode === mode
          ? 'focus-visible:outline-none focus-visible:bg-blue-600 bg-blue-500'
          : 'focus-visible:outline-none focus-visible:bg-gray-100 hover:bg-gray-100'
      }
      onClick={() => setMode(mode)}
    >
      <Button.Icon icon={icon} />
    </Button.Root>
  )
}
