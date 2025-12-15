import { db } from "~/drizzle";
import { financial_records_table } from "~/drizzle/db/schema";
import { getRequestIP, getHeader, readBody } from "h3";
import { z } from "zod";

const record_schema = z.object({
    name: z.string().min(1).max(128),
    netto: z.number().nonnegative(),
    currency: z.enum(["PLN"]),
    vat: z.number().nonnegative(),
    vat_name: z.enum(['23%', '22%', '8%', '7%', '5%', '3%', '0%', 'zw.', 'np.', 'o.o.']),
    tax: z.number().nonnegative(),
    brutto: z.number().nonnegative(),
});

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const parsed = record_schema.safeParse(body);
        if(!parsed.success) {
            return {
                success: false,
                error: "Nieprawidłowe dane wejściowe",
            };
        }
        const ip =
            getRequestIP(event) ||
            getHeader(event, "x-real-ip") ||
            getHeader(event, "x-forwarded-for")?.split(",")[0]?.trim() ||
            event.node.req.socket?.remoteAddress ||
            "-";

        const record = {
            ...parsed.data,
            user_ip: ip,
        };

        await db.insert(financial_records_table).values(record);
        return { success: true };
    } catch (error) {
        console.error("Błąd zapisu rekordu:", error);
        return {
            success: false,
            error: "Nie udało się zapisać rekordu do bazy",
        };
    }
});