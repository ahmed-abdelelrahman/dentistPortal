import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const drug1 = await prisma.drug.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      generics: 'aspirin',
      brands: 'nasr',
      dosages: 'one cup',
    },
  });
  const insurance1 = await prisma.insurance.upsert({
    where: { id: 1 }, // Choose an appropriate ID or unique field for your use case
    update: {},
    create: {
      id: 1,
      name: 'Sample Insurance',
      email: 'insurance@example.com',
      address: '123 Insurance St',
      contactNumber: '123-456-7890',
    },
  });

  console.log({ insurance1 });
  const drug2 = await prisma.drug.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      generics: 'parasetamol',
      brands: 'panadol',
      dosages: 'one tablet',
    },
  });

  console.log({ drug1, drug2 });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
