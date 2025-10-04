-- CreateTable
CREATE TABLE "UserRegistration" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fName" TEXT NOT NULL,
    "lName" TEXT,
    "gender" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "pincode" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'Bharat (India)',
    "state" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "policeStation" TEXT,
    "postOffice" TEXT,
    "locality" TEXT NOT NULL,
    "landmark" TEXT,

    CONSTRAINT "UserRegistration_pkey" PRIMARY KEY ("id")
);
