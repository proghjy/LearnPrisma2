import { objectType } from 'nexus'

export const Channel = objectType({
  name: 'Channel',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.users({
      pagination: false,
    })
    t.model.messages({
      pagination: false,
    })
    t.model.createdAt()
  },
})
