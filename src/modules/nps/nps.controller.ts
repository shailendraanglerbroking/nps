import { Controller, Get, Post, Body, Request, Query } from '@nestjs/common';
import { NpsService } from './nps.service';
import { CreateClientLeadsAnswerDto } from './dto/create-client-leads-answer.dto';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { CreateClientLeadsDto } from './dto/create-client-leads.dto';

@ApiTags('nps')
@Controller('nps')
export class NpsController {
  constructor(private readonly npsService: NpsService) {}
  
  
  @Get('/questions:surveyMasterId')
  getRatingQuestion(@Query('surveyMasterId') surveyMasterId: number) {
    return this.npsService.getRatingQuestion(surveyMasterId);
  }

  @Get('/options:surveyQuestionMasterId')
  getRatingOptions(@Query('surveyQuestionMasterId') surveyQuestionMasterId: number) {
    return this.npsService.getRatingOptions(surveyQuestionMasterId);
  }

  @Post('/client-leads')
  @ApiFoundResponse({
    description: 'returns the data about the client leads',
    type: CreateClientLeadsDto,
  })
  insertClientLeads(@Body() createClientLeadsDto: CreateClientLeadsDto) {
    console.log("body", createClientLeadsDto)
    return this.npsService.insertClientLeads(createClientLeadsDto);
  }

  @Post('/client-leads-answer')
  @ApiFoundResponse({
    description: 'returns the data about the client leads Answer',
    type: CreateClientLeadsAnswerDto,
  })
  insertClientLeadsAnswer(@Body() createClientLeadsAnswerDto: CreateClientLeadsAnswerDto) {
    console.log("body", createClientLeadsAnswerDto)
    return this.npsService.insertClientLeadsAnswer(createClientLeadsAnswerDto);
  }
}
