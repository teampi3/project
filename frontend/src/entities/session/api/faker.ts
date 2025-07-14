import { faker } from '@faker-js/faker'
import type { Session } from '../model/types'

export const session: Session = {
  id: faker.number.int(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
}
