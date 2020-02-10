import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'proghjy@gmail.com',
      name: 'Paul Han',
      password: 'thansk4you'
    },
  })

  
main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.disconnect()
  })