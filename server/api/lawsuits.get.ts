//  import { lawsuits } from "../db-schemas/lawsuits.schema";
import { lawsuitsTable, db } from "../db-schemas/pg-lawsuits.schema";

import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';


export default defineEventHandler(async (e) => {

    try {
        const lawsuitsData = await db.select().from(lawsuitsTable);

        //  const lawsuitsData =  db.select().from(lawsuits).all()
        // const lawsuitsData =  db.select().from(lawsuitsTable).all()
        return { "lawsuits": lawsuitsData }
        
    } catch (e: any) {
        throw createError({
            statusCode: 400,
            statusMessage: e.message
        })
        
    }
});
