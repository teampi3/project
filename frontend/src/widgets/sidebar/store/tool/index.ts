import { atom } from 'jotai'
import type { Tool } from './types'

export const toolAtom = atom<Tool>('select')
