import { http } from '@/shared/lib/axios/http'
import type { Session } from '@/entities/session/model/types'

export function login(email: string, password: string) {
  return http.post<Session[]>('/login', { email, password })
}

export function register(name: string, email: string, password: string) {
  return http.post<Session[]>('/register', { name, email, password })
}
