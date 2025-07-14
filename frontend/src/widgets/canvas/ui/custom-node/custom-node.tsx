import { memo } from 'react'
import { useAtom } from 'jotai'
import { modeAtom } from '@/widgets/sidebar/model/store'
import { Handle, Position } from '@xyflow/react'
import type { NodeProps } from '@xyflow/react'
import './custom-node.css'

export type CustomNodeProps = NodeProps & {
  data: { label: string }
}

export const CustomNode = memo(({ data }: CustomNodeProps) => {
  const [mode] = useAtom(modeAtom)
  const isConnectMode = mode === 'connect1' || mode === 'connect2'

  return (
    <div className={`react-flow__custom-node ${mode}`}>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectMode}
      />
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectMode}
        isConnectableStart={false}
      />
      {data.label}
    </div>
  )
})
