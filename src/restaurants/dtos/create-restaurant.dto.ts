import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsString } from "class-validator";


@InputType()
export class CreateRestaurantDto {
    
    @Field(type => String)
    @IsString()
        name:string;
    
    @Field(type => Boolean)
    @IsBoolean()
        isVegan:boolean;
    
    @Field(type => String)
    @IsString()
        address:string;
    
    @Field(type => String)
    @IsString()
        ownerName:string;
}