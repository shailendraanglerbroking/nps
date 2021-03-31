import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateNpsDto {

    @IsNotEmpty()
    @IsNumber()
    readonly SurveyMasterId: number;

    @IsNotEmpty()
    @IsString()
    readonly ClientCode: string;

    @IsNotEmpty()
    @IsNumber()
    readonly SurveyQuestionId: number;

    @IsNotEmpty()
    @IsNumber()
    readonly SurveyQuestionOptionId: number;
    
    @IsNotEmpty()
    @IsNumber()
    readonly Rating: number

    readonly Comments: string

    readonly AnyOther: string
}