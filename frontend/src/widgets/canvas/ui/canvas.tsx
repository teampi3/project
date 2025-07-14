import { useCallback } from 'react'

import {
  ReactFlow,
  Background,
  useReactFlow,
  useNodesState,
  useEdgesState,
  MarkerType,
  ConnectionMode,
  type Node,
  type Edge,
  type Connection,
} from '@xyflow/react'

import '@xyflow/react/dist/style.css'
import '../styles/xy-theme.css'

import { useAtom } from 'jotai'
import { modeAtom } from '@/widgets/sidebar/model/store'
import { CustomNode } from './custom-node'
import { CustomEdge } from './custom-edge'
import { CustomConnectionLine } from './custom-connection-line'
import { v4 as uuidv4 } from 'uuid'

const initialNodes: Node[] = []
const initialEdges: Edge[] = []

const nodeTypes = {
  custom: CustomNode,
}

const edgeTypes = {
  custom: CustomEdge,
}

const defaultEdgeOptions = {
  type: 'custom',
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: '#fff',
  },
}

const connectionLineStyle = {
  stroke: '#fff',
}

export const Canvas = () => {
  const [mode] = useAtom(modeAtom)
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const { screenToFlowPosition } = useReactFlow()

  const onConnect = useCallback(
    (params: Connection) => {
      if (mode !== 'connect1' && mode !== 'connect2') return
      const newEdge: Edge = { ...params, id: uuidv4() }
      setEdges((eds) => [...eds, newEdge])
    },
    [mode],
  )

  const onPaneClick = useCallback(
    (event: React.MouseEvent) => {
      if (mode !== 'add') return

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      })

      const newNode: Node = {
        id: uuidv4(),
        type: 'custom',
        position,
        data: { label: '' },
      }

      setNodes((nds) => [...nds, newNode])
    },
    [mode, screenToFlowPosition],
  )

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      if (mode !== 'remove') return

      setNodes((nds) => nds.filter((n) => n.id !== node.id))

      setEdges((eds) =>
        eds.filter(
          (edge) => edge.source !== node.id && edge.target !== node.id,
        ),
      )
    },
    [mode],
  )

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onPaneClick={onPaneClick}
      onConnect={onConnect}
      onNodeClick={onNodeClick}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      defaultEdgeOptions={defaultEdgeOptions}
      connectionLineComponent={CustomConnectionLine}
      connectionLineStyle={connectionLineStyle}
      connectionMode={ConnectionMode.Loose}
      elementsSelectable={mode === 'edit'}
      nodesDraggable={mode === 'move'}
      nodesConnectable={mode.includes('connect')}
      nodeOrigin={[0.5, 0.5]}
      fitView
    >
      <Background />
    </ReactFlow>
  )
}
