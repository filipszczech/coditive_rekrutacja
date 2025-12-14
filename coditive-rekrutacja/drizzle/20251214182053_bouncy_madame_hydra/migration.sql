CREATE TABLE `financial_records` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text NOT NULL,
	`netto` real NOT NULL,
	`currency` text NOT NULL,
	`vat` integer NOT NULL,
	`vat_name` text NOT NULL,
	`tax` real NOT NULL,
	`brutto` real NOT NULL,
	`user_ip` text,
	`created` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
