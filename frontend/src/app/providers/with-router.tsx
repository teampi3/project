import { RouterProvider } from 'react-router-dom'
import { router } from '@/pages/_router'

export function withRouter<T extends object>(
  Component: React.ComponentType<T>,
): React.FC<T> {
  return (props: T) => (
    <>
      <RouterProvider router={router} />
      <Component {...props} />
    </>
  )
}
