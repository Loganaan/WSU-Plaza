import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const listings = await prisma.listing.findMany({
      include: {
        category: true, // joins the category info
      },
      orderBy: {
        dateListed: 'desc',
      },
    });

    return new Response(JSON.stringify(listings), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Failed to fetch listings' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
