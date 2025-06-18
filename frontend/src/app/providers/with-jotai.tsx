import { Provider } from 'jotai'

export function withJotai<T extends object>(
  Component: React.ComponentType<T>,
): React.FC<T> {
  return (props: T) => (
    <Provider>
      <Component {...props} />
    </Provider>
  )
}
