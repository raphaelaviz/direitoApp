
import { lawsuitsTable, db } from "../../db-schemas/pg-lawsuits.schema";
import { eq } from 'drizzle-orm';

export default defineEventHandler(async (e) => {

    try {
        
        const lawsuitId = e.context.params?.id as string
        const singleLawsuitData = await db
            .delete(lawsuitsTable)
            .where(eq(lawsuitsTable.id, parseInt(lawsuitId)))

         console.log(lawsuitId)


        return { "lawsuits": singleLawsuitData }
        
    } catch (e: any) {
        throw createError({
            statusCode: 400,
            statusMessage: e.message
        })
        
    }
});
