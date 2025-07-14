import { Icon } from '@/shared/ui/icon'
import { ModeButton } from './buttons/mode-button'
import { ActionButton } from './buttons/action-button'
import { useReactFlow } from '@xyflow/react'

export function Sidebar() {
  const { zoomIn, zoomOut, fitView } = useReactFlow()

  return (
    <aside className="flex flex-col items-center w-18 py-5 bg-gray-400">
      <div className="flex flex-col gap-1">
        <ModeButton mode="edit" icon={Icon.Cursor} />
        <ModeButton mode="move" icon={Icon.Hand} />
        <ModeButton mode="add" icon={Icon.Plus} />
        <ModeButton mode="remove" icon={Icon.Minus} />
        <ModeButton mode="connect1" icon={Icon.ArrowRight} />
        <ModeButton mode="connect2" icon={Icon.Line} />
      </div>
      <div className="mt-auto flex flex-col gap-1">
        <ActionButton icon={Icon.ZoomIn} onClick={() => zoomIn()} />
        <ActionButton icon={Icon.ZoomOut} onClick={() => zoomOut()} />
        <ActionButton icon={Icon.FullScreen} onClick={() => fitView()} />
      </div>
    </aside>
  )
}
