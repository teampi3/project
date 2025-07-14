import { Header } from '@/widgets/header/ui'
import { Sidebar } from '@/widgets/sidebar/ui/sidebar'
import { Canvas } from '@/widgets/canvas/ui'

export function DashboardPage() {
  return (
    <>
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-900">
          <Canvas />
        </main>
      </div>
    </>
  )
}
