import { Model } from 'sequelize-typescript';
import { SurveyMaster } from './survey.master.entity.';
export declare class SurveyClientLeads extends Model<SurveyClientLeads> {
    Id: number;
    SurveyMaster: SurveyMaster;
    SurveyMasterId: number;
    ClientCode: string;
    createdAt: Date;
    updatedAt: Date;
    UpdatedBy: number;
    Active: Boolean;
    Source: string;
}
