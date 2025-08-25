# INVENTREE+

INVENTREE+ is an advanced inventory management application that enables inventory control across multiple selling platforms.

## About

This application provides:
- Unified inventory management across eBay and Shopify
- Virtual SKU architecture for centralized stock control
- Modern, bright UI with toast notifications
- Real-time inventory synchronization

## Tech Stack

This is a [Next.js](https://nextjs.org) project with:
- **Framework**: Next.js 15.5.0
- **Database**: PostgreSQL (Neon)
- **ORM**: Prisma
- **Deployment**: Vercel
- **Styling**: Tailwind CSS

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
inventree-plus/
├── src/           # Application source code
├── prisma/        # Database schema and migrations
├── context/       # Project documentation
├── public/        # Static assets
└── [config files] # Various configuration files
```

## Database

The application uses PostgreSQL hosted on Neon. Database schema includes:
- Products and Virtual SKUs
- Platform integrations (eBay, Shopify)
- Inventory tracking
- Order management
- Customer data

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

Proprietary - All rights reserved