const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function cleanDatabase() {
  console.log('Starting database cleanup...');
  
  try {
    // Delete all data in order (respecting foreign key constraints)
    await prisma.order_shipping_addresses.deleteMany();
    await prisma.order_items.deleteMany();
    await prisma.orders.deleteMany();
    await prisma.customer_tags.deleteMany();
    await prisma.customer_platforms.deleteMany();
    await prisma.customer_addresses.deleteMany();
    await prisma.customers.deleteMany();
    await prisma.warehouse_stock.deleteMany();
    await prisma.product_prices.deleteMany();
    await prisma.platform_products.deleteMany();
    await prisma.bundle_components.deleteMany();
    await prisma.products.deleteMany();
    await prisma.suppliers.deleteMany();
    await prisma.platform_integrations.deleteMany();
    await prisma.dashboard_metrics.deleteMany();
    
    console.log('✅ All data has been deleted from the database');
    console.log('✅ Table structure remains intact');
  } catch (error) {
    console.error('Error cleaning database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

cleanDatabase();