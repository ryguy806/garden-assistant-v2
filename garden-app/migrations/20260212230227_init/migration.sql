-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "JournalItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entry" TEXT NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "JournalItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CalendarItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "createdDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventDate" DATETIME NOT NULL,
    "details" TEXT NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "CalendarItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

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
    "sunlight" TEXT NOT NULL,
    "growth_rate" TEXT NOT NULL,
    "flowering_season" TEXT NOT NULL,
    CONSTRAINT "PerenualPlantProfileItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HardinessItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "min" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,
    CONSTRAINT "HardinessItem_id_fkey" FOREIGN KEY ("id") REFERENCES "PerenualPlantProfileItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PruningMonthItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "month" TEXT NOT NULL,
    CONSTRAINT "PruningMonthItem_id_fkey" FOREIGN KEY ("id") REFERENCES "PerenualPlantProfileItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AttractItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "species" TEXT NOT NULL,
    CONSTRAINT "AttractItem_id_fkey" FOREIGN KEY ("id") REFERENCES "PerenualPlantProfileItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PestItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "species" TEXT NOT NULL,
    CONSTRAINT "PestItem_id_fkey" FOREIGN KEY ("id") REFERENCES "PerenualPlantProfileItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DimensionsItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "min_value" REAL NOT NULL,
    "max_value" REAL NOT NULL,
    "unit" TEXT NOT NULL,
    CONSTRAINT "DimensionsItem_id_fkey" FOREIGN KEY ("id") REFERENCES "PerenualPlantProfileItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GardenMap" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "GardenMap_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Auth" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" INTEGER,
    CONSTRAINT "Auth_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AuthIdentity" (
    "providerName" TEXT NOT NULL,
    "providerUserId" TEXT NOT NULL,
    "providerData" TEXT NOT NULL DEFAULT '{}',
    "authId" TEXT NOT NULL,

    PRIMARY KEY ("providerName", "providerUserId"),
    CONSTRAINT "AuthIdentity_authId_fkey" FOREIGN KEY ("authId") REFERENCES "Auth" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "expiresAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Auth" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "HardinessItem_id_key" ON "HardinessItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PruningMonthItem_id_key" ON "PruningMonthItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "AttractItem_id_key" ON "AttractItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PestItem_id_key" ON "PestItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DimensionsItem_id_key" ON "DimensionsItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Auth_userId_key" ON "Auth"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_id_key" ON "Session"("id");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");
