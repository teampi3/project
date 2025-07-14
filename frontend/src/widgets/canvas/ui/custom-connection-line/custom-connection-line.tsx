import React from 'react'
import { getStraightPath } from '@xyflow/react'
import type { ConnectionLineComponentProps } from '@xyflow/react'
import './custom-connection-line.css'

export const CustomConnectionLine = React.memo(
  (props: ConnectionLineComponentProps) => {
    const { fromX, fromY, toX, toY, connectionLineStyle } = props

    const [path] = getStraightPath({
      sourceX: fromX,
      sourceY: fromY,
      targetX: toX,
      targetY: toY,
    })

    return (
      <g>
        <path d={path} style={connectionLineStyle} fill="none" />
      </g>
    )
  },
)
