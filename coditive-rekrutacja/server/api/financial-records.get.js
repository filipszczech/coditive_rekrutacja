import { db } from "~/drizzle";
import { financial_records_table } from "~/drizzle/db/schema";
import { getQuery } from "h3";
import { desc, lt } from "drizzle-orm";

export default defineEventHandler(async (event) => {
    try {
        const limit = 12;
        const query = getQuery(event);
        const after = query.after ? String(query.after) : null;
        
        const records = await db
            .select()
            .from(financial_records_table)
            .where(after ? lt(financial_records_table.created, after): undefined)
            .orderBy(desc(financial_records_table.created))
            .limit(limit + 1)

        const has_next = records.length > limit;
        const data = records.slice(0, limit);
        return {
            success: true,
            data: data,
            next_cursor: has_next ? data.at(-1)?.created ?? null : null,
        };
    } catch (error) {
        console.error("Błąd pobierania rekordów:", error);
        return {
            success: false,
            error: "Nie udało się pobrać rekordów",
        };
    }
});