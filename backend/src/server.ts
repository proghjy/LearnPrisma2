import { GraphQLServer } from 'graphql-yoga'
import { permissions } from './permissions'
import { schema } from './schema'
import { createContext } from './context'

const server = new GraphQLServer({
  schema,
  context: createContext,
  middlewares: [permissions],
  
})
server.start(
  {
    endpoint: '/graphql',
    playground: '/graphql',
    subscriptions: false,
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  () => console.log(
    `🚀 Server ready at: http://localhost:4000/graphql`,
  ),
)
