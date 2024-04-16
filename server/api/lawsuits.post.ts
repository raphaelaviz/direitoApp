
import { lawsuitsTable, db } from "../db-schemas/pg-lawsuits.schema";


export default defineEventHandler(async (e) => {
   const body = await readBody(e);


   const lawsuit = db.insert(lawsuitsTable).values(body).returning()
  

  return lawsuit;
});

