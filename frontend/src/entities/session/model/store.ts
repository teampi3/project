import { atom } from 'jotai'
import type { Session } from './types'

export const sessionAtom = atom<null | Session>(null)
