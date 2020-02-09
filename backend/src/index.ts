import { nexusPrismaPlugin } from 'nexus-prisma';
import { PrismaClient } from '@prisma/client';
import {
  intArg,
  makeSchema,
  objectType,
  stringArg,
  booleanArg,
} from 'nexus';
import { GraphQLServer } from 'graphql-yoga';
import { join } from 'path';
import { Context } from './types';

const prisma = new PrismaClient();

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
  },
});

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.list.field('users', {
      type: 'User',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.user;
      },
    });
  },
});

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneUser({ alias: 'signupUser' });
  },
});

const schema = makeSchema({
  types: [Query, Mutation, User],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    typegen: join(__dirname, '../generated/nexus-typegen.ts'),
    schema: join(__dirname, '/schema.graphql'),
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: join(__dirname, 'types.ts'),
        alias: 'Context',
      },
    ],
  },
});

const server = new GraphQLServer({
  schema,
  context: { prisma },
});

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
  () => console.log(`🚀 Server ready`)
);
