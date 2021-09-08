import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { SurveyClientLeadsAnswer } from './entities/survey.client.leads.answer.entity';
import { SurveyClientLeads } from './entities/survey.client.leads.entity';
import { SurveyMaster } from './entities/survey.master.entity.';
import { SurveyQuestionMaster } from './entities/survey.question.master.entity';
import { SurveyQuestionOption } from './entities/survey.question.option.entity';
import * as moment from 'moment-timezone';
const { Op } = require('sequelize');

@Injectable()
export class NpsService {
  constructor(
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
    console.log("createClientLeadsDto ", createClientLeadsDto)
    const foundItem = await this.surveyClientLeadsModel.findOne({
      where: {
        ClientCode: createClientLeadsDto.ClientCode,
        SurveyMasterId: createClientLeadsDto.SurveyMasterId,
        Active: true
      },
    });
    //const Id = foundItem.Id
    //console.log("Id ", Id)
    
    if (!foundItem) {
      const item = await this.surveyClientLeadsModel.create(
        createClientLeadsDto,
      );
      return { item, created: true };
    }
  else{
    const count= foundItem.Count;
    console.log("count ", +count+1)
    const item = await this.surveyClientLeadsModel.update({
        Count: +count+1
    },
      {
        where: {
          ClientCode: createClientLeadsDto.ClientCode,
          SurveyMasterId: createClientLeadsDto.SurveyMasterId,
          Active: true
        },
      },
    );
    return { item, created: false, updated: true };
  }
  }

  async insertClientLeadsAnswer(createClientLeadsAnswerDto) {  
    console.log("createClientLeadsAnswerDto ", createClientLeadsAnswerDto)
    const foundItem = await this.surveyClientLeadsAnswerModel.findOne({
      where: {
        ClientCode: createClientLeadsAnswerDto.ClientCode,
        SurveyMasterId: createClientLeadsAnswerDto.SurveyMasterId,
        Active: true
      },
    });
    if (!foundItem) {
      const item = await this.surveyClientLeadsAnswerModel.create(
        createClientLeadsAnswerDto,
      );
      return { item, created: true };
    } else {
      const isDateLessThan3Months = await this.surveyClientLeadsAnswerModel.findOne(
        {
          where: {
            ClientCode: createClientLeadsAnswerDto.ClientCode,
            Active: true,
            createdAt: {
              [Op.gte]: moment().subtract(3, 'months'),
            },
          },
        },
      );
      if (!isDateLessThan3Months) {
        const item = await this.surveyClientLeadsAnswerModel.create(
          createClientLeadsAnswerDto,
        );
        return { item, created: true };
      } else {
        const item = await this.surveyClientLeadsAnswerModel.update(
          createClientLeadsAnswerDto,
          {
            where: {
              ClientCode: createClientLeadsAnswerDto.ClientCode,
              Active: true
            },
          },
        );
        return { item, created: false, updated: true };
      }
    }
  }

  async getQuestions(surveyMasterId: number) {
    const ratingQuestion = await this.surveyQuestionMasterModel.findAll({
      attributes: [['Id', 'SurveyQuestionMasterId'], 'QstType', 'Questions'],
      where: {
        SurveyMasterId: surveyMasterId,
        QstType: 'Rating',
        Active: true
      },
    });
    const optionQuestion = await this.surveyQuestionMasterModel.findAll({
      attributes: ['SurveyRatingMasterId', ['Id', 'SurveyQuestionMasterId'], 'QstType', 'Questions'],
      where: {
        SurveyMasterId: surveyMasterId,
        QstType: 'Option',
        Active: true
      },
      include: {
        model: this.surveyQuestionOptionModel,
        attributes: [['Id', 'SurveyQuestionOptionId'], 'Options'],
      },
    });
    return {
      ratingQuestion,
      optionQuestion,
    };
  }
}
