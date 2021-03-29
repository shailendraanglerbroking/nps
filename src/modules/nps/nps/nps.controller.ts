import { Controller, Get, Post, Body, Request, Query } from '@nestjs/common';
import { NpsService } from './nps.service';
import { CreateNpsDto } from './dto/create-nps.dto';
//import { UpdateNpDto } from './dto/update-np.dto';

@Controller('nps')
export class NpsController {
  constructor(private readonly npsService: NpsService) {}

  @Get('/questions:surveyMasterId')
  getRatingQuestion(@Query('surveyMasterId') surveyMasterId: number) {
    return this.npsService.getRatingQuestion(surveyMasterId);
  }

  @Get('/options:surveyQuestionId')
  getRatingOptions(@Query('surveyQuestionId') surveyQuestionId: number) {
    console.log(surveyQuestionId)
    return this.npsService.getRatingOptions(surveyQuestionId);
  }

  @Post()
  createNPS(@Body() createNpsDto: CreateNpsDto, @Request() req) {
    return this.npsService.createNPS(createNpsDto, req.clientCode, req.surveyMasterId);
  }
}
