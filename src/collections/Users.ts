import type { Access, CollectionConfig } from 'payload'

const isAppUser: Access = ({ req }) => {
  if (req.user?.collection !== 'users') return false
  return { id: { equals: req.user.id } }
}

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 60 * 60 * 24 * 7,
    maxLoginAttempts: 5,
    lockTime: 10 * 60 * 1000,
  },
  access: {
    create: () => true,
    delete: () => false,
    read: isAppUser,
    update: isAppUser,
  },
  admin: {
    hidden: true,
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      maxLength: 80,
    },
  ],
  versions: false,
}
