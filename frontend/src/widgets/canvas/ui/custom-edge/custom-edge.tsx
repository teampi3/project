import React from 'react'
import './custom-edge.css'

import {
  BaseEdge,
  useInternalNode,
  EdgeLabelRenderer,
  useReactFlow,
  useStore,
  getStraightPath,
  type EdgeProps,
  type ReactFlowState,
} from '@xyflow/react'

import { getEdgeParams } from '../../utils/flow'

export const getSpecialPath = (
  {
    sourceX,
    sourceY,
    targetX,
    targetY,
  }: {
    sourceX: number
    sourceY: number
    targetX: number
    targetY: number
  },
  offset: number,
  edgeIndex: number,
  totalEdges: number,
) => {
  const centerX = (sourceX + targetX) / 2
  const centerY = (sourceY + targetY) / 2

  const isVerticalAlignment =
    Math.abs(sourceX - targetX) < Math.abs(sourceY - targetY)

  const baseOffset = offset * (edgeIndex - (totalEdges - 1) / 2)

  if (isVerticalAlignment) {
    return {
      path: `M ${sourceX} ${sourceY} Q ${centerX + baseOffset} ${centerY} ${targetX} ${targetY}`,
      labelX: centerX + baseOffset / 2,
      labelY: centerY,
    }
  } else {
    return {
      path: `M ${sourceX} ${sourceY} Q ${centerX} ${centerY + baseOffset} ${targetX} ${targetY}`,
      labelX: centerX,
      labelY: centerY + baseOffset / 2,
    }
  }
}

export const CustomEdge = React.memo((props: EdgeProps) => {
  const { id, source, target, markerEnd, style, selected } = props

  const sourceNode = useInternalNode(source)
  const targetNode = useInternalNode(target)
  const { setEdges } = useReactFlow()

  const edgeGroupInfo = useStore((s: ReactFlowState) => {
    const edgesBetweenNodes = s.edges.filter(
      (e) =>
        (e.source === source && e.target === target) ||
        (e.source === target && e.target === source),
    )

    const currentEdgeIndex = edgesBetweenNodes.findIndex((e) => e.id === id)

    return {
      totalEdges: edgesBetweenNodes.length,
      edgeIndex: currentEdgeIndex,
    }
  })

  if (!sourceNode || !targetNode) {
    return null
  }

  const {
    sx: sourceX,
    sy: sourceY,
    tx: targetX,
    ty: targetY,
  } = getEdgeParams(sourceNode, targetNode)

  let path = ''
  let labelX = (sourceX + targetX) / 2
  let labelY = (sourceY + targetY) / 2

  if (edgeGroupInfo.totalEdges > 1) {
    const offset = 25
    const specialPath = getSpecialPath(
      { sourceX, sourceY, targetX, targetY },
      offset,
      edgeGroupInfo.edgeIndex,
      edgeGroupInfo.totalEdges,
    )
    path = specialPath.path
    labelX = specialPath.labelX
    labelY = specialPath.labelY
  } else {
    ;[path] = getStraightPath({
      sourceX,
      sourceY,
      targetX,
      targetY,
    })
  }

  return (
    <>
      <BaseEdge id={id} path={path} style={style} markerEnd={markerEnd} />
      {selected && (
        <EdgeLabelRenderer>
          <div
            className="button-edge__label nodrag nopan"
            style={{
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            }}
          >
            <button
              className="button-edge__button"
              onClick={() =>
                setEdges((edges) => edges.filter((edge) => edge.id !== id))
              }
            >
              ×
            </button>
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  )
})
