import { Module } from '@nestjs/common';
import { NpsService } from './nps.service';
import { NpsController } from './nps.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SurveyMaster } from './entities/survey.master.entity.';
import { SurveyQuestionOption } from './entities/survey.question.option.entity';
import { SurveyClientLeads } from './entities/survey.client.leads.entity';
import { SurveyClientLeadsAnswer } from './entities/survey.client.leads.answer.entity';
import { SurveyQuestionMaster } from './entities/survey.question.master.entity';
import { SurveyQuestionMapping } from './entities/survey.question.mapping.entity';
@Module({
  imports: [ SequelizeModule.forFeature([
    SurveyMaster,
    SurveyClientLeads,
    SurveyClientLeadsAnswer,
    SurveyQuestionMaster,
    SurveyQuestionMapping,
    SurveyQuestionOption
  ]),],

   controllers: [NpsController],
   providers: [NpsService]  
})
export class NpsModule {}
