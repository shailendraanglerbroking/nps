import { Model } from 'sequelize-typescript';
import { SurveyClientLeadsAnswer } from './survey.client.leads.answer.entity';
import { SurveyMaster } from './survey.master.entity.';
import { SurveyQuestionOption } from './survey.question.option.entity';
export declare class SurveyQuestionMaster extends Model<SurveyQuestionMaster> {
    Id: number;
    Questions: string;
    SurveyMaster: SurveyMaster;
    SurveyMasterId: number;
    QstType: string;
    CreatedBy: number;
    UpdatedBy: number;
    createdAt: Date;
    updatedAt: Date;
    Active: Boolean;
    SurveyQuestionOption: SurveyQuestionOption;
    SurveyClientLeadsAnswer: SurveyClientLeadsAnswer;
}
