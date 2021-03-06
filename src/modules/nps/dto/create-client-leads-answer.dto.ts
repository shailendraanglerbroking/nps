import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateClientLeadsAnswerDto {

    @IsNotEmpty()
    @IsNumber()
    readonly SurveyMasterId: number;

    @IsNotEmpty()
    @IsString()
    readonly ClientCode: string;

    @IsNotEmpty()
    @IsNumber()
    readonly SurveyQuestionMasterId: number;

    @IsNotEmpty()
    @IsString()
    readonly ClientLeadsId: string;

    @IsNotEmpty()
    @IsNumber()
    readonly SurveyQuestionOptionId: number;
    
    @IsNotEmpty()
    @IsNumber()
    readonly Rating: number

    readonly Comments: string

    readonly AnyOther: string

    readonly Active: boolean
}