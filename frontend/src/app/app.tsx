import { withProviders } from './providers'
import './styles/app.css'

function App<T extends object>(Page: React.ComponentType<T>): React.FC<T> {
  return (props: T) => (
    <div className="flex flex-col min-h-screen">
      <Page {...props} />
    </div>
  )
}

export default App(withProviders(() => <></>))
