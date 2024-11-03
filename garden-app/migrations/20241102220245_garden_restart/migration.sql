/*
  Warnings:

  - You are about to drop the `GardenProfileItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TreeProfileItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "GardenProfileItem";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TreeProfileItem";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "PlantProfileItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "imageURL" TEXT,
    "details" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "PlantProfileItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlantProfileItem_id_fkey" FOREIGN KEY ("id") REFERENCES "GardenMap" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
