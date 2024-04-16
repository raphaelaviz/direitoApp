import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
import { boolean } from 'drizzle-orm/pg-core';
 
// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);
// Create a pgTable that maps to a table in your DB
export const lawsuitsTable = pgTable(
  'lawsuits',
  {
    id: serial('id').primaryKey(),
    number: text('number').notNull(),
    plaintiff: text("Plaintiff").notNull(),
    defendant: text("Defendant").notNull(),
    status: text ("Status").notNull(),
    priority: text("Priority"),
    favorite: boolean('boolean'),
    createdAt: timestamp('createdAt').defaultNow(),
  },
  (lawsuits) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(lawsuits.id),
    };
  },
);
 
export const getExampleTable = async () => {
  const selectResult = await db.select().from(lawsuitsTable);
  console.log('Results', selectResult);
};