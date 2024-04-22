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
 

export const db = drizzle(sql);

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
    createdAt: text ("Created at"),
  },
  (lawsuits) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(lawsuits.id),
    };
  },
);


