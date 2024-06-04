import { Module } from "@nestjs/common";
import { ParkModuleBase } from "./base/park.module.base";
import { ParkService } from "./park.service";
import { ParkController } from "./park.controller";
import { ParkResolver } from "./park.resolver";

@Module({
  imports: [ParkModuleBase],
  controllers: [ParkController],
  providers: [ParkService, ParkResolver],
  exports: [ParkService],
})
export class ParkModule {}
