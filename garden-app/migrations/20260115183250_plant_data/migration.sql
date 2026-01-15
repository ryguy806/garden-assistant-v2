-- CreateTable
CREATE TABLE "PlantItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "common_name" TEXT,
    "scientific_name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "slug" TEXT NOT NULL
);
