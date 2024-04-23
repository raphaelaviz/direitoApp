
import { lawsuitsTable, db } from "../../db-schemas/pg-lawsuits.schema";
import { eq } from 'drizzle-orm';

export default defineEventHandler(async (e) => {

    try {

        const body = await readBody(e);
        const lawsuitId = e.context.params?.id as string

        const editLawsuit = {
            ...body
        }
        
        const singleLawsuitData = await db
            .update(lawsuitsTable)
            .set(editLawsuit)
            .where(eq(lawsuitsTable.id, parseInt(lawsuitId)))
            

        return { "lawsuits": singleLawsuitData }
        
    } catch (e: any) {
        throw createError({
            statusCode: 400,
            statusMessage: e.message
        })
        
    }
});
