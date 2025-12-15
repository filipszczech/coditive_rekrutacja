import { db } from "~/drizzle";
import { financial_records_table } from "~/drizzle/db/schema";
import { getRequestIP, readBody } from "h3";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const ip = getRequestIP(event) || event.node.req.socket.remoteAddress || "unknown";

        const record = {
            name: body.name,
            netto: body.netto,
            currency: body.currency,
            vat: body.vat,
            vat_name: body.vat_name,
            tax: body.tax,
            brutto: body.brutto,
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