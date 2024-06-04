/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Park } from "./Park";
import { ParkCountArgs } from "./ParkCountArgs";
import { ParkFindManyArgs } from "./ParkFindManyArgs";
import { ParkFindUniqueArgs } from "./ParkFindUniqueArgs";
import { DeleteParkArgs } from "./DeleteParkArgs";
import { ParkService } from "../park.service";
@graphql.Resolver(() => Park)
export class ParkResolverBase {
  constructor(protected readonly service: ParkService) {}

  async _parksMeta(
    @graphql.Args() args: ParkCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Park])
  async parks(@graphql.Args() args: ParkFindManyArgs): Promise<Park[]> {
    return this.service.parks(args);
  }

  @graphql.Query(() => Park, { nullable: true })
  async park(@graphql.Args() args: ParkFindUniqueArgs): Promise<Park | null> {
    const result = await this.service.park(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Park)
  async deletePark(@graphql.Args() args: DeleteParkArgs): Promise<Park | null> {
    try {
      return await this.service.deletePark(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
