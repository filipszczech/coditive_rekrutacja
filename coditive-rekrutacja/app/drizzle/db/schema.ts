import { int, sqliteTable, text, real } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const financial_records_table = sqliteTable("financial_records", {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    netto: real().notNull(),
    currency: text().notNull(),
    vat: int().notNull(),
    vat_name: text().notNull(),
    tax: real().notNull(),
    brutto: real().notNull(),
    user_ip: text(),
    created: text().notNull().default(sql`(CURRENT_TIMESTAMP)`),
});