import { http } from '@/shared/lib/axios/http'
import type { User } from '../model/types'

export function all() {
  return http.get<User[]>('/users')
}
