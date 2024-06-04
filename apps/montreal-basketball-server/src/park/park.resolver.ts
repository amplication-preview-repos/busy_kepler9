import * as graphql from "@nestjs/graphql";
import { ParkResolverBase } from "./base/park.resolver.base";
import { Park } from "./base/Park";
import { ParkService } from "./park.service";

@graphql.Resolver(() => Park)
export class ParkResolver extends ParkResolverBase {
  constructor(protected readonly service: ParkService) {
    super(service);
  }
}
