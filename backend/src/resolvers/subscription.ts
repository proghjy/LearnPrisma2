// import { objectType, idArg } from 'nexus'
// import { PubSub, withFilter } from 'graphql-yoga'

// const pubsub = new PubSub()

// export const Subscription = objectType({
//   name: 'Subscription',
//   definition(t) {
//     t.field('publishedMessage', {
//       type: 'Message',
//       args: {
//         channelId: idArg({ required: true })
//       },
//       subscribe: (parent, { id }, ctx) => ctx.pubsub.asyncIterator(
        
//       )
//     })
//   },
// })
