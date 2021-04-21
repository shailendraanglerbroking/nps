import { Model } from 'sequelize-typescript';
import { SurveyMaster } from './survey.master.entity.';
import { SurveyQuestionMaster } from './survey.question.master.entity';
import { SurveyQuestionOption } from './survey.question.option.entity';
export declare class SurveyClientLeadsAnswer extends Model<SurveyClientLeadsAnswer> {
    Id: number;
    SurveyMaster: SurveyMaster;
    SurveyMasterId: number;
    ClientCode: string;
    SurveyQuestionMaster: SurveyQuestionMaster;
    SurveyQuestionMasterId: number;
    SurveyQuestionOption: SurveyQuestionOption;
    SurveyQuestionOptionId: number;
    Rating: number;
    Comments: string;
    AnyOther: string;
    createdAt: Date;
    updatedAt: Date;
    UpdatedBy: number;
    Active: Boolean;
}
