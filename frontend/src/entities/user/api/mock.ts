import { mock } from '@/shared/lib/axios-mock-adapter/adapter'
import { users } from './faker'

export function setupUserMocks() {
  mock.onGet('/users').reply(200, users)
}
