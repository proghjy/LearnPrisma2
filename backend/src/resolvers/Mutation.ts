import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { idArg, mutationType, stringArg } from 'nexus'
import { APP_SECRET, getUserId } from '../utils'

export const Mutation = mutationType({
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        name: stringArg(),
        email: stringArg({ nullable: false }),
        password: stringArg({ nullable: false }),
      },
      resolve: async (_parent, { name, email, password }, ctx) => {
        const hashedPassword = await hash(password, 10)
        const user = await ctx.prisma.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
          },
        })
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
      },
    })

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: stringArg({ nullable: false }),
        password: stringArg({ nullable: false }),
      },
      resolve: async (_parent, { email, password }, ctx) => {
        const user = await ctx.prisma.user.findOne({
          where: {
            email,
          },
        })
        if (!user) {
          throw new Error(`No user found for email: ${email}`)
        }
        const passwordValid = await compare(password, user.password)
        if (!passwordValid) {
          throw new Error('Invalid password')
        }
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
      },
    })

    t.field('createChannel', {
      type: 'Channel',
      args: {
        name: stringArg({ nullable: false }),
      },
      resolve: (parent, { name }, ctx) => {
        const userId = getUserId(ctx)
        return ctx.prisma.channel.create({
          data: {
            name,
            users: [
              { connect: { id: userId } },
            ],
          }
        })
      }
    })

    t.field('sendMessage', {
      type: 'Channel',
      args: {
        text: stringArg({ nullable: false }),
        channelId: idArg({ nullable: false }),
      },
      resolve: (parent, { channelId, text }, ctx) => {
        const userId = getUserId(ctx)
        return ctx.prisma.message.create({
          data: {
            text,
            sender: { connect: { id: userId }},
            channel: { connect: { id: channelId }},
          }
        })
      }
    })
  },
})
