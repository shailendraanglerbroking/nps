import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { SurveyClientLeadsAnswer } from './entities/survey.client.leads.answer.entity';
import { SurveyClientLeads } from './entities/survey.client.leads.entity';
import { SurveyMaster } from './entities/survey.master.entity.';
import { SurveyQuestionMaster } from './entities/survey.question.master.entity';
import { SurveyQuestionOption } from './entities/survey.question.option.entity';
import * as moment from 'moment-timezone';
//import * as Op from '@nestjs/sequelize';
const { Op } = require('sequelize')

@Injectable()
export class NpsService {
  constructor(
    // @InjectModel(SurveyClientLeads)
    // private readonly surveyClientLeadsRepository: typeof SurveyClientLeads,
    
    @InjectModel(SurveyMaster)
    private surveyMasterModel: typeof SurveyMaster,

    @InjectModel(SurveyClientLeads)
    private surveyClientLeadsModel: typeof SurveyClientLeads,

    @InjectModel(SurveyQuestionMaster)
    private surveyQuestionMasterModel: typeof SurveyQuestionMaster,

    @InjectModel(SurveyClientLeadsAnswer)
    private surveyClientLeadsAnswerModel: typeof SurveyClientLeadsAnswer,

    @InjectModel(SurveyQuestionOption)
    private surveyQuestionOptionModel: typeof SurveyQuestionOption,
   
    private sequelize: Sequelize,
  ) {}

  async insertClientLeads(createClientLeadsDto) {    
      return await this.surveyClientLeadsModel.create(createClientLeadsDto)    
  }
  
  async insertClientLeadsAnswer(createClientLeadsAnswerDto) {
    const foundItem = await this.surveyClientLeadsAnswerModel.findOne({where :{
      ClientCode: createClientLeadsAnswerDto.ClientCode,
      SurveyMasterId: createClientLeadsAnswerDto.SurveyMasterId      
    }});
    console.log("Item found", foundItem)
   if (!foundItem) {
        // Item not found, create a new one
        const item = await this.surveyClientLeadsAnswerModel.create(createClientLeadsAnswerDto)
        return  {item, created: true};
    }
    // Found an item, update it
    else
    {

      const isDateLessThan3Months = await this.surveyClientLeadsAnswerModel.findOne({
       where:
        {
          ClientCode: createClientLeadsAnswerDto.ClientCode,
          createdAt:
          {
            [Op.lt]: moment().subtract(3, 'months')
          }
        }
      })
      console.log("isDateLessThan3Months", isDateLessThan3Months)
      if(!isDateLessThan3Months) {
        const item = await this.surveyClientLeadsAnswerModel.create(createClientLeadsAnswerDto)
        return  {item, created: true};
      }
      else
      {
      const item = await this.surveyClientLeadsAnswerModel.update(createClientLeadsAnswerDto, {where:
      {
        ClientCode: createClientLeadsAnswerDto.ClientCode
    }});
    return {item, created: false, updated: true};
  }
}      
  }

  async getRatingQuestion(surveyMasterId: number) {      
   return await this.surveyQuestionMasterModel.findAll({
        attributes: ['Id', 'QstType', 'Questions'],
        where: {
          SurveyMasterId: surveyMasterId,
          //sQstType: 'Rating'
        }
      })
  }


  getRatingOptions(surveyQuestionMasterId: number) {
    return this.surveyQuestionMasterModel.findOrCreate({
      attributes: [['Id', 'surveyQuestionId'], 'Questions'],
      include: [
        {
          model: this.surveyQuestionOptionModel,         
      attributes: [['Id', 'optionId'], 'Options'],
      on:{
        SurveyQuestionMasterId:surveyQuestionMasterId      
        }
      },
    ],
    where:{
      Id:surveyQuestionMasterId
    },             
    })
  }
}
