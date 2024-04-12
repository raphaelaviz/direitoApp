import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

//No Boolean in SQLite: https://orm.drizzle.team/docs/column-types/sqlite

export const processos = sqliteTable("processos", {
  id: integer("id").primaryKey(),
  numero: text ("Número"),
  requerente: text("Requerente"),
  requerido: text("Requerido"),
  status: text ("Status"),
  prioridade: text("Prioridade"),
  favorito: integer('Favorito', { mode: 'boolean' }),
  createdAt: text("createdAt").default(sql`CURRENT_TIMESTAMP`),
});




