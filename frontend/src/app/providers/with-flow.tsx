import { ReactFlowProvider } from '@xyflow/react'

export function withFlow<T extends object>(
  Component: React.ComponentType<T>,
): React.FC<T> {
  return (props: T) => (
    <ReactFlowProvider>
      <Component {...props} />
    </ReactFlowProvider>
  )
}
