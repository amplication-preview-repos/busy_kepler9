import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParkService } from "./park.service";
import { ParkControllerBase } from "./base/park.controller.base";

@swagger.ApiTags("parks")
@common.Controller("parks")
export class ParkController extends ParkControllerBase {
  constructor(protected readonly service: ParkService) {
    super(service);
  }
}
