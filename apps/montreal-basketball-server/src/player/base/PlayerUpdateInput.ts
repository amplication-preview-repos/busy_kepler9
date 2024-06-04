/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsOptional,
  ValidateNested,
  IsEnum,
  IsString,
} from "class-validator";
import { AttendanceUpdateManyWithoutPlayersInput } from "./AttendanceUpdateManyWithoutPlayersInput";
import { Type } from "class-transformer";
import { EnumPlayerCurrentStatus } from "./EnumPlayerCurrentStatus";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumPlayerSkillLevel } from "./EnumPlayerSkillLevel";

@InputType()
class PlayerUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  age?: number | null;

  @ApiProperty({
    required: false,
    type: () => AttendanceUpdateManyWithoutPlayersInput,
  })
  @ValidateNested()
  @Type(() => AttendanceUpdateManyWithoutPlayersInput)
  @IsOptional()
  @Field(() => AttendanceUpdateManyWithoutPlayersInput, {
    nullable: true,
  })
  attendances?: AttendanceUpdateManyWithoutPlayersInput;

  @ApiProperty({
    required: false,
    enum: EnumPlayerCurrentStatus,
  })
  @IsEnum(EnumPlayerCurrentStatus)
  @IsOptional()
  @Field(() => EnumPlayerCurrentStatus, {
    nullable: true,
  })
  currentStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  location?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumPlayerSkillLevel,
  })
  @IsEnum(EnumPlayerSkillLevel)
  @IsOptional()
  @Field(() => EnumPlayerSkillLevel, {
    nullable: true,
  })
  skillLevel?: "Option1" | null;
}

export { PlayerUpdateInput as PlayerUpdateInput };
