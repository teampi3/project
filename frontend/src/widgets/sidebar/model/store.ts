import { atom } from 'jotai'
import type { Mode } from './types'

export const modeAtom = atom<Mode>('edit')
