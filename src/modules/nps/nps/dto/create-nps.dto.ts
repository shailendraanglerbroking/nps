import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateNpsDto {

    @IsNotEmpty()
    @IsNumber()
    readonly surveyMasterId: number;

    @IsNotEmpty()
    @IsString()
    readonly clientCode: string;

    @IsNotEmpty()
    @IsNumber()
    readonly surveyQuestionId: number;

    @IsNotEmpty()
    @IsNumber()
    readonly rating: number
}