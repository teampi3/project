import AxiosMockAdapter from 'axios-mock-adapter'
import { http } from '@/shared/lib/axios/http'

export const mock = new AxiosMockAdapter(http, {
  delayResponse: 500,
})
