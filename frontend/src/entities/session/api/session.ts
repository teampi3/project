import { http } from '@/shared/lib/axios/http'
import type { Session } from '../model/types'

export function me() {
  return http.get<Session>('/me')
}
