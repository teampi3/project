import { Position, MarkerType } from '@xyflow/react'
import type { Node, Edge, InternalNode } from '@xyflow/react'

interface Point {
  x: number
  y: number
}

interface EdgeParams {
  sx: number
  sy: number
  tx: number
  ty: number
  sourcePos: Position
  targetPos: Position
}

function getNodeIntersection(
  intersectionNode: InternalNode<Node>,
  targetNode: InternalNode<Node>,
): Point {
  const { width: intersectionNodeWidth } = intersectionNode.measured
  const intersectionNodePosition = intersectionNode.internals.positionAbsolute
  const targetPosition = targetNode.internals.positionAbsolute

  const radius = (intersectionNodeWidth as number) / 2

  const cx = intersectionNodePosition.x + radius
  const cy = intersectionNodePosition.y + radius

  const tx = targetPosition.x + (targetNode.measured.width as number) / 2
  const ty = targetPosition.y + (targetNode.measured.height as number) / 2

  const dx = tx - cx
  const dy = ty - cy
  const angle = Math.atan2(dy, dx)

  const x = cx + radius * Math.cos(angle)
  const y = cy + radius * Math.sin(angle)

  return { x, y }
}

function getEdgePosition(
  node: InternalNode<Node>,
  intersectionPoint: Point,
): Position {
  const n = { ...node.internals.positionAbsolute, ...node.measured }
  const nx = Math.round(n.x)
  const ny = Math.round(n.y)
  const px = Math.round(intersectionPoint.x)
  const py = Math.round(intersectionPoint.y)

  if (px <= nx + 1) {
    return Position.Left
  }
  if (px >= nx + (n.width as number) - 1) {
    return Position.Right
  }
  if (py <= ny + 1) {
    return Position.Top
  }
  if (py >= ny + (n.height as number) - 1) {
    return Position.Bottom
  }

  return Position.Top
}

export function getEdgeParams(
  source: InternalNode<Node>,
  target: InternalNode<Node>,
): EdgeParams {
  const sourceIntersectionPoint = getNodeIntersection(source, target)
  const targetIntersectionPoint = getNodeIntersection(target, source)

  const sourcePos = getEdgePosition(source, sourceIntersectionPoint)
  const targetPos = getEdgePosition(target, targetIntersectionPoint)

  return {
    sx: sourceIntersectionPoint.x,
    sy: sourceIntersectionPoint.y,
    tx: targetIntersectionPoint.x,
    ty: targetIntersectionPoint.y,
    sourcePos,
    targetPos,
  }
}

export function createNodesAndEdges(): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = []
  const edges: Edge[] = []
  const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

  nodes.push({
    id: 'target',
    data: { label: 'Target' },
    position: center,
    type: 'default',
  })

  for (let i = 0; i < 8; i++) {
    const degrees = i * (360 / 8)
    const radians = degrees * (Math.PI / 180)
    const x = 250 * Math.cos(radians) + center.x
    const y = 250 * Math.sin(radians) + center.y

    nodes.push({
      id: `${i}`,
      data: { label: 'Source' },
      position: { x, y },
      type: 'default',
    })

    edges.push({
      id: `edge-${i}`,
      target: 'target',
      source: `${i}`,
      type: 'custom',
      markerEnd: {
        type: MarkerType.Arrow,
      },
    })
  }

  return { nodes, edges }
}
