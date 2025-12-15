import { db } from "~/drizzle";
import { financial_records_table } from "~/drizzle/db/schema";

export default defineEventHandler(async (event) => {
    try {
        const records = await db
            .select()
            .from(financial_records_table)
            .orderBy(financial_records_table.created, "desc");

        return {
            success: true,
            data: records,
        };
    } catch (error) {
        console.error("Błąd pobierania rekordów:", error);
        return {
            success: false,
            error: "Nie udało się pobrać rekordów",
        };
    }
});