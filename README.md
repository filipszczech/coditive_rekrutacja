# Coditive Rekrutacja – VAT Calculator

Nuxt project using **Drizzle ORM** and SQLite to store financial records and calculate VAT.

## Features

- VAT calculator form with instant calculations
- Client-side and server-side validation
- Saving financial records to the database
- Displaying records in a table with pagination
- Showing occurring errors in UI
- Responsive design based on the **Coditive** website

## Initial Setup

Install dependencies:
```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Drizzle Setup

Create database connection variable in `.env`:
```bash
DB_FILE_NAME=mydb.sqlite
```

## Drizzle migrations

Run initial drizzle kit commands to generate and apply migrations:
```bash
# Generate migrations:
npx drizzle-kit generate

# Apply migrations:
npx drizzle-kit migrate
```

## Run project

Navigate to the root directory and start nuxt server:
```bash
# Navigate to project root:
cd coditive_rekrutacja

# Start server:
npm run dev
```
