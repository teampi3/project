import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/pages/home'
import { DashboardPage } from '@/pages/dashboard'

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/dashboard', element: <DashboardPage /> },
])
