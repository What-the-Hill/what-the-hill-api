-- AlterTable
ALTER TABLE "Bill" ADD COLUMN     "floorSponsorId" TEXT;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_floorSponsorId_fkey" FOREIGN KEY ("floorSponsorId") REFERENCES "Legislator"("id") ON DELETE SET NULL ON UPDATE CASCADE;
