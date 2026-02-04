-- CreateTable
CREATE TABLE "PerenualPlantProfileItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "createdDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "default_image" TEXT NOT NULL,
    "common_name" TEXT NOT NULL,
    "scientific_name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "cycle" TEXT NOT NULL,
    "watering" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "soil" TEXT NOT NULL,
    CONSTRAINT "PerenualPlantProfileItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SunlightItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL,
    CONSTRAINT "SunlightItem_id_fkey" FOREIGN KEY ("id") REFERENCES "PerenualPlantProfileItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HardinessItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "min" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,
    CONSTRAINT "HardinessItem_id_fkey" FOREIGN KEY ("id") REFERENCES "PerenualPlantProfileItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DimensionsItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT,
    "min_value" REAL NOT NULL,
    "max_value" REAL NOT NULL,
    "unit" TEXT NOT NULL,
    CONSTRAINT "DimensionsItem_id_fkey" FOREIGN KEY ("id") REFERENCES "PerenualPlantProfileItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "SunlightItem_id_key" ON "SunlightItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "HardinessItem_id_key" ON "HardinessItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DimensionsItem_id_key" ON "DimensionsItem"("id");
