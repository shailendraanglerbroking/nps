import { Model } from 'sequelize-typescript';
import { SurveyClientLeadsAnswer } from './survey.client.leads.answer.entity';
import { SurveyClientLeads } from './survey.client.leads.entity';
import { SurveyQuestionMaster } from './survey.question.master.entity';
export declare class SurveyMaster extends Model<SurveyMaster> {
    Id: number;
    SurveyName: string;
    SurveyCode: string;
    CreatedBy: number;
    createdAt: Date;
    updatedAt: Date;
    UpdatedBy: number;
    Active: Boolean;
    SurveyQuestionMaster: SurveyQuestionMaster;
    SurveyClientLeadsAnswer: SurveyClientLeadsAnswer;
    SurveyClientLeads: SurveyClientLeads;
}
