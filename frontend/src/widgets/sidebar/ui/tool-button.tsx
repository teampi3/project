import { useAtom } from 'jotai'
import { Button } from '@/shared/ui/button'
import { toolAtom } from '../store/tool'
import type { Tool } from '../store/tool/types'
import type { IconProps } from '@/shared/ui/icon'

export type ToolButtonProps = {
  tool: Tool
  icon: React.ElementType<IconProps>
}

export function ToolButton({ tool, icon }: ToolButtonProps) {
  const [currentTool, setTool] = useAtom(toolAtom)
  const isActive = currentTool === tool

  return (
    <Button.Root
      variant="icon"
      onClick={() => setTool(tool)}
      className={isActive ? 'btn-primary' : 'btn-common'}
    >
      <Button.Icon icon={icon} />
    </Button.Root>
  )
}
