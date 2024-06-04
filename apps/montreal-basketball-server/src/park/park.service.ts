import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParkServiceBase } from "./base/park.service.base";

@Injectable()
export class ParkService extends ParkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
