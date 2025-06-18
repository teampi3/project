import { Icon } from '@/shared/ui/icon'
import { ToolButton } from './tool-button'
import { ActionButton } from './action-button'

export function Sidebar() {
  return (
    <aside className="flex flex-col items-center w-18 py-5 bg-gray-400">
      <div className="flex flex-col gap-2">
        <ToolButton tool="select" icon={Icon.Cursor} />
        <ToolButton tool="move" icon={Icon.Hand} />
        <ToolButton tool="add" icon={Icon.Plus} />
        <ActionButton icon={Icon.X} />
      </div>

      <div className="mt-auto flex flex-col gap-2">
        <ActionButton icon={Icon.Download} />
        <ActionButton icon={Icon.ZoomIn} />
        <ActionButton icon={Icon.ZoomOut} />
      </div>
    </aside>
  )
}
