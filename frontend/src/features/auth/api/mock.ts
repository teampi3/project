import { mock } from '@/shared/lib/axios-mock-adapter/adapter'
import { session } from '@/entities/session/api/faker'

export function setupAuthMocks() {
  mock.onPost('/login').reply(200, session)
  mock.onPost('/register').reply(200, session)
}
