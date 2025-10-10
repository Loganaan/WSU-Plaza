import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const textbooks = await prisma.category.create({
    data: { field: 'Textbooks' },
  });

  const electronics = await prisma.category.create({
    data: { field: 'Electronics' },
  });

  const furniture = await prisma.category.create({
    data: { field: 'Furniture' },
  });

    // Create listings
    await prisma.listing.create({
        data: {
            title: 'Calculus Textbook',
            description: 'Used calculus textbook, good condition',
            price: 50,
            imageUrl: 'https://example.com/calculus.jpg',
            status: 'active',
            categoryId: textbooks.id,
        },
    });

    await prisma.listing.create({
        data: {
            title: 'Laptop',
            description: 'MacBook Pro 2019, lightly used',
            price: 1200,
            imageUrl: 'https://example.com/laptop.jpg',
            status: 'active',
            categoryId: electronics.id,
        },
    });

    await prisma.listing.create({
        data: {
            title: 'Desk Chair',
            description: 'Comfortable office chair',
            price: 75,
            imageUrl: 'https://example.com/chair.jpg',
            status: 'active',
            categoryId: furniture.id,
        },
    });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
