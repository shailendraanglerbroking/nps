import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { response } from 'express';
import { Model } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CreateNpsDto } from './dto/create-nps.dto';
import { SurveyClientLeadsAnswer } from './entities/survey.client.leads.answer.entity';
import { SurveyClientLeads } from './entities/survey.client.leads.entity';
import { SurveyMaster } from './entities/survey.master.entity.';
import { SurveyQuestionMaster } from './entities/survey.question.master.entity';
import { SurveyQuestionOption } from './entities/survey.question.option.entity';
//import { UpdateNpDto } from './dto/update-np.dto';

@Injectable()
export class NpsService {
  constructor(
    @InjectModel(SurveyClientLeads)
    private readonly surveyClientLeadsRepository: typeof SurveyClientLeads,
    
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

  async createNPS(createNpsDto: CreateNpsDto, clientCode, surveyMasterId) {
    // const res = await this.surveyClientLeadsModel.create({

    // })
     
  }

SurveyQuestionMapping
  async getRatingQuestion(surveyMasterId: number) {
    let surveyQuestionId, question;
      // surveyQuestionId= await this.surveyQuestionMappingModel.findAll({
      //   attributes: ['SurveyQuestionId'],
      //   where:{
      //     SurveyMasterId:surveyMasterId
      //   }        
      // })
    question = await this.surveyQuestionMasterModel.findAll({
        attributes: ['Questions'],
        where: {
          Id: surveyQuestionId[0]['SurveyQuestionId'],
          QstType: 'Rating'
        }
      })
      return {
        surveyQuestionId,
        question
      }
    
  }


  getRatingOptions(surveyQuestionId: number) {
    console.log(surveyQuestionId)
    return this.surveyQuestionMasterModel.findAll({
      attributes: [['Id', 'surveyQuestionId'], 'Questions'],
      include: [
        {
          model: this.surveyQuestionOptionModel,         
      attributes: [['Id', 'optionId'], 'Options'],
      on:{
        SurveyQuestionMasterId:surveyQuestionId      
        }
      },
    ],
    where:{
      Id:surveyQuestionId
    },             
    })
  }

  // update(id: number, updateNpDto: UpdateNpDto) {
  //   return `This action updates a #${id} np`;
  // }

  remove(id: number) {
    return `This action removes a #${id} np`;
  }
}
