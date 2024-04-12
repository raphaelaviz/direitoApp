CREATE TABLE `processos` (
	`id` integer PRIMARY KEY NOT NULL,
	`requerente` text,
	`requerido` text,
	`prioridade` text,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP
);
