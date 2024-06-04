/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Park as PrismaPark } from "@prisma/client";

export class ParkServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ParkCountArgs, "select">): Promise<number> {
    return this.prisma.park.count(args);
  }

  async parks<T extends Prisma.ParkFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParkFindManyArgs>
  ): Promise<PrismaPark[]> {
    return this.prisma.park.findMany<Prisma.ParkFindManyArgs>(args);
  }
  async park<T extends Prisma.ParkFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParkFindUniqueArgs>
  ): Promise<PrismaPark | null> {
    return this.prisma.park.findUnique(args);
  }
  async createPark<T extends Prisma.ParkCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParkCreateArgs>
  ): Promise<PrismaPark> {
    return this.prisma.park.create<T>(args);
  }
  async updatePark<T extends Prisma.ParkUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParkUpdateArgs>
  ): Promise<PrismaPark> {
    return this.prisma.park.update<T>(args);
  }
  async deletePark<T extends Prisma.ParkDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParkDeleteArgs>
  ): Promise<PrismaPark> {
    return this.prisma.park.delete(args);
  }
}
