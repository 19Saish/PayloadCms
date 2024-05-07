import { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: isAdmin,
    read: ({req: {user}}) => true,
    update: ({req: {user}}) => true,
    delete: isAdmin
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: "roles",
      saveToJWT: true,
      label: "Roles",
      type: "select",
      defaultValue: "customer",
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Customer",
          value: "customer"
        }
      ]
    }
  ],
}

export default Users
