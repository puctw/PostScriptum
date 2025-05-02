CREATE TABLE `contas_table` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`site_associado` text,
	`username_conta` text,
	`password_conta` text,
	CONSTRAINT `contas_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `guardioes_table` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`email_guardiao` text,
	`numero_de_telemovel_guardiao` text,
	`dono_id` bigint,
	CONSTRAINT `guardioes_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users_table` ADD `tipo_de_plano` text;--> statement-breakpoint
ALTER TABLE `users_table` ADD `username` text;--> statement-breakpoint
ALTER TABLE `users_table` ADD `password` text;--> statement-breakpoint
ALTER TABLE `users_table` ADD `email` text;--> statement-breakpoint
ALTER TABLE `users_table` ADD `numero_de_telemovel` text;--> statement-breakpoint
ALTER TABLE `users_table` ADD `cartao_de_cidadao` text;