import compose from 'compose-function'
import { withJotai } from './with-jotai'
import { withAuth } from './with-auth'
import { withRouter } from './with-router'

export const withProviders = compose(withJotai, withAuth, withRouter)
