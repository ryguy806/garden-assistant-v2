-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PlantProfileItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "createdDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "plantedDate" DATETIME NOT NULL,
    "imageURL" TEXT,
    "name" TEXT NOT NULL,
    "garden" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "fertilizerNeeds" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "notes" TEXT,
    CONSTRAINT "PlantProfileItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlantProfileItem" ("createdDate", "details", "fertilizerNeeds", "garden", "group", "id", "imageURL", "name", "notes", "plantedDate", "type", "userId") SELECT "createdDate", "details", "fertilizerNeeds", "garden", "group", "id", "imageURL", "name", "notes", "plantedDate", "type", "userId" FROM "PlantProfileItem";
DROP TABLE "PlantProfileItem";
ALTER TABLE "new_PlantProfileItem" RENAME TO "PlantProfileItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
