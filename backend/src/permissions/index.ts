import { rule, shield } from 'graphql-shield'
import { getUserId } from '../utils'

const rules = {
  isAuthenticatedUser: rule() ((parent, args, ctx) => {
    const userId = getUserId(ctx)
    return Boolean(userId)
  }),
}

export const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser,
    channel: rules.isAuthenticatedUser,
  },
  Mutation: {
    createChannel: rules.isAuthenticatedUser,
  }
})
