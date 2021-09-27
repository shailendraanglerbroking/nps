import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { NpsService } from './nps.service';
import { CreateClientLeadsAnswerDto } from './dto/create-client-leads-answer.dto';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { CreateClientLeadsDto } from './dto/create-client-leads.dto';
//import { Log } from '../nps/utilities/logs'
const Log = require('./utilities/logs');

const perf = require('execution-time')();

let log = new Log()
var uniqid = require('uniqid');


@ApiTags('nps')
@Controller('nps')
export class NpsController {
  constructor(private readonly npsService: NpsService) {}

  @Get('/questions:surveyMasterId')
  
  getRatingQuestion(
    @Query  
    ('surveyMasterId') surveyMasterId: number)    
     {
      let resp;
      perf.start();
      const reqId = uniqid()
    resp = this.npsService.getQuestions(surveyMasterId);
    log.APILog(reqId, (perf.stop()).time, "surveyMasterId", JSON.stringify(surveyMasterId), JSON.stringify(resp))
    return resp;
  }

  @Post('/client-leads')
  @ApiFoundResponse({
    description: 'returns the data about the client leads',
    type: CreateClientLeadsDto,
  })
  
  insertClientLeads(
  @Body()
  createClientLeadsDto: CreateClientLeadsDto) {
    let resp;
    perf.start();
    const reqId = uniqid()

    resp = this.npsService.insertClientLeads(createClientLeadsDto);
    log.APILog(reqId, (perf.stop()).time, "client-leads", JSON.stringify(createClientLeadsDto), JSON.stringify(resp))
    return resp;
  }

  @Post('/client-leads-answer')
  @ApiFoundResponse({
    description: 'returns the data about the client leads Answer',
    type: CreateClientLeadsAnswerDto,
  })
  insertClientLeadsAnswer(
    @Body()    
    createClientLeadsAnswerDto: CreateClientLeadsAnswerDto,
  ) {
    let resp;
    perf.start();
    const reqId = uniqid()

    resp = this.npsService.insertClientLeadsAnswer(createClientLeadsAnswerDto);
    log.APILog(reqId, (perf.stop()).time, "client-leads-answer", JSON.stringify(createClientLeadsAnswerDto), JSON.stringify(resp))
    return resp;
    
  }
}
