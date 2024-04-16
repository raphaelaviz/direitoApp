import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

//No Boolean in SQLite: https://orm.drizzle.team/docs/column-types/sqlite


// TODO: change the "numero" and "createdAt" tables to "número" and "registrado em"
// then change the quick fix in DataTableViewOptions


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



