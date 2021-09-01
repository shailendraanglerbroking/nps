import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateClientLeadsDto {

    @IsNotEmpty()
    @IsNumber()
    readonly SurveyMasterId: number;

    @IsNotEmpty()
    @IsString()
    readonly ClientCode: string;

    readonly Active: boolean

    readonly Source: string

    readonly Count: number

    readonly IpAddress: string

    readonly DeviceType: string

    readonly BrowserName: string

    readonly App: string
}