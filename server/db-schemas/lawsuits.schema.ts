/*import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";






export const lawsuits = sqliteTable("lawsuits", {
  id: integer("id").primaryKey(),
  number: text ("Number"),
  plaintiff: text("Plaintiff"),
  defendant: text("Defendant"),
  status: text ("Status"),
  priority: text("Priority"),
  favorite: integer('Favorite', { mode: 'boolean' }),
  createdAt: text("createdAt").default(sql`CURRENT_TIMESTAMP`),
});
*/



