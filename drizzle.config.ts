/*import type { Config } from 'drizzle-kit';
export default {
  schema: './server/db-schemas',
  out: './drizzle',
  driver: 'better-sqlite', 
  dbCredentials: {
    url: "./sqlite.db"
  }
} satisfies Config;*/


import type { Config } from 'drizzle-kit';
import { defineConfig } from 'drizzle-kit'


export default defineConfig({
 schema: "./server/db-schemas/pg-lawsuits.schema.ts",
  driver: 'pg',
  dbCredentials: {
    connectionString: "postgres://default:sJuXteL7h1bE@ep-delicate-hall-a2fj4yla-pooler.eu-central-1.aws.neon.tech/verceldb?sslmode=require",
  },
  verbose: true,
  strict: true,
}) satisfies Config;