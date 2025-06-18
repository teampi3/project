import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar/ui'

export function DashboardPage() {
  return (
    <>
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-900"></main>
      </div>
    </>
  )
}
