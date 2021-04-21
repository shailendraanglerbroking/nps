import { Model } from 'sequelize-typescript';
import { SurveyClientLeadsAnswer } from './survey.client.leads.answer.entity';
import { SurveyQuestionMaster } from './survey.question.master.entity';
export declare class SurveyQuestionOption extends Model<SurveyQuestionOption> {
    Id: number;
    SurveyQuestionMaster: SurveyQuestionMaster;
    SurveyQuestionMasterId: number;
    Options: string;
    CreatedBy: number;
    UpdatedBy: number;
    createdAt: Date;
    updatedAt: Date;
    Active: Boolean;
    SurveyClientLeadsAnswer: SurveyClientLeadsAnswer;
}
