import { processos } from "../db-schemas/processos.schema";

export default defineEventHandler(async (e) => {
  const body = await readBody(e);

  const processo = db.insert(processos).values(body).returning().all();

  return processo;
});