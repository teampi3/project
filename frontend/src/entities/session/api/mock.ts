import { mock } from '@/shared/lib/axios-mock-adapter/adapter'
import { session } from './faker'

export function setupSessionMocks() {
  mock.onGet('/me').reply(200, session)
}
