import { processos } from "../db-schemas/processos.schema";

export default defineEventHandler(async (e) => {

    try {

        const processosData =  db.select().from(processos).all()
        return { "processos": processosData }
        
    } catch (e: any) {
        throw createError({
            statusCode: 400,
            statusMessage: e.message
        })
        
    }
});