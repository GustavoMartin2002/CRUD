-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `nascimento` DATETIME(3) NOT NULL,

    UNIQUE INDEX `usuario_id_key`(`id`),
    UNIQUE INDEX `usuario_email_key`(`email`),
    UNIQUE INDEX `usuario_telefone_key`(`telefone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
