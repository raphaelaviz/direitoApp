
import { lawsuitsTable, db } from "../../db-schemas/pg-lawsuits.schema";
import { eq, ne, gt, gte, lt, isNull } from 'drizzle-orm';

// https://orm.drizzle.team/docs/operators
 

export default defineEventHandler(async (e) => {

    try {
        
        const lawsuitId = e.context.params?.id as string
        const singleLawsuitData = await db
            .select()
            .from(lawsuitsTable)
            .where(eq(lawsuitsTable.id, parseInt(lawsuitId)));


        return { "lawsuits": singleLawsuitData }
        
    } catch (e: any) {
        throw createError({
            statusCode: 400,
            statusMessage: e.message
        })
        
    }
});
