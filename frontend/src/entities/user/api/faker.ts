import { faker } from '@faker-js/faker'
import type { User } from '../model/types'

const length = 10
export const users: User[] = Array.from({ length }, (_, i) => ({
  id: i + 1,
  name: faker.person.fullName(),
  email: faker.internet.email(),
}))
