import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateClientLeadsDto {

    @IsNotEmpty()
    @IsNumber()
    readonly SurveyMasterId: number;

    @IsNotEmpty()
    @IsString()
    readonly ClientCode: string;

    readonly Source: string
}