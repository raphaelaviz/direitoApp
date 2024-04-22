import type { Config } from 'drizzle-kit';
import { defineConfig } from 'drizzle-kit'


export default defineConfig({
 schema: "./server/db-schemas/pg-lawsuits.schema.ts",
  driver: 'pg',
  dbCredentials: {
    //TODO: switch this to env
    connectionString: "postgres://default:sJuXteL7h1bE@ep-delicate-hall-a2fj4yla-pooler.eu-central-1.aws.neon.tech/verceldb?sslmode=require",
  },
  verbose: true,
  strict: true,
}) satisfies Config;