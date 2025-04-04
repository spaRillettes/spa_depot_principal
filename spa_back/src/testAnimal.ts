const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Créer un nouvel animal
  const newAnimal = await prisma.animal.create({
    data: {
      firstname: 'Brutus',
    },
  });

  console.log('Animal créé :', newAnimal);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });