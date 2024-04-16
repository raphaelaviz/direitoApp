
import { lawsuitsTable, db } from "../db-schemas/pg-lawsuits.schema";


export default defineEventHandler(async (e) => {

    try {
        const lawsuitsData = await db.select().from(lawsuitsTable);

        return { "lawsuits": lawsuitsData }
        
    } catch (e: any) {
        throw createError({
            statusCode: 400,
            statusMessage: e.message
        })
        
    }
});
