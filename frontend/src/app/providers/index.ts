import compose from 'compose-function'
import { withJotai } from './with-jotai'
import { withAuth } from './with-auth'
import { withFlow } from './with-flow'
import { withRouter } from './with-router'

export const withProviders = compose(withJotai, withAuth, withFlow, withRouter)
