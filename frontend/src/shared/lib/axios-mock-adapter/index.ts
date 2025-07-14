import { setupUserMocks } from '@/entities/user/api/mock'
import { setupSessionMocks } from '@/entities/session/api/mock'
import { setupAuthMocks } from '@/features/auth/api/mock'

export function setupMocks() {
  setupUserMocks()
  setupSessionMocks()
  setupAuthMocks()
}
