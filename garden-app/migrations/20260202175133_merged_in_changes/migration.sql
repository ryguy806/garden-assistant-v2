/*
  Warnings:

  - You are about to drop the column `duration` on the `PlantProfileItem` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "DurationItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "duration" TEXT NOT NULL,
    "plant_profile_id" INTEGER NOT NULL,
    CONSTRAINT "DurationItem_plant_profile_id_fkey" FOREIGN KEY ("plant_profile_id") REFERENCES "PlantProfileItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PlantProfileItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "createdDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "common_name" TEXT,
    "scientific_name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "growth_habit" TEXT,
    "light" INTEGER,
    "image_url" TEXT,
    CONSTRAINT "PlantProfileItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlantProfileItem" ("common_name", "createdDate", "growth_habit", "id", "image_url", "light", "scientific_name", "slug", "userId") SELECT "common_name", "createdDate", "growth_habit", "id", "image_url", "light", "scientific_name", "slug", "userId" FROM "PlantProfileItem";
DROP TABLE "PlantProfileItem";
ALTER TABLE "new_PlantProfileItem" RENAME TO "PlantProfileItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "DurationItem_plant_profile_id_key" ON "DurationItem"("plant_profile_id");
