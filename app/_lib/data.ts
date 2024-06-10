import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fetchGFMs() {
  try {
    return await prisma.gfms.findMany();
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the gfms');
  }
}

export { fetchGFMs };
