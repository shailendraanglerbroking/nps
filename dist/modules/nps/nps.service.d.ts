import { Sequelize } from 'sequelize-typescript';
import { SurveyClientLeadsAnswer } from './entities/survey.client.leads.answer.entity';
import { SurveyClientLeads } from './entities/survey.client.leads.entity';
import { SurveyMaster } from './entities/survey.master.entity.';
import { SurveyQuestionMaster } from './entities/survey.question.master.entity';
import { SurveyQuestionOption } from './entities/survey.question.option.entity';
export declare class NpsService {
    private surveyMasterModel;
    private surveyClientLeadsModel;
    private surveyQuestionMasterModel;
    private surveyClientLeadsAnswerModel;
    private surveyQuestionOptionModel;
    private sequelize;
    constructor(surveyMasterModel: typeof SurveyMaster, surveyClientLeadsModel: typeof SurveyClientLeads, surveyQuestionMasterModel: typeof SurveyQuestionMaster, surveyClientLeadsAnswerModel: typeof SurveyClientLeadsAnswer, surveyQuestionOptionModel: typeof SurveyQuestionOption, sequelize: Sequelize);
    insertClientLeads(createClientLeadsDto: any): Promise<SurveyClientLeads>;
    insertClientLeadsAnswer(createClientLeadsAnswerDto: any): Promise<{
        item: SurveyClientLeadsAnswer;
        created: boolean;
        updated?: undefined;
    } | {
        item: [number, SurveyClientLeadsAnswer[]];
        created: boolean;
        updated: boolean;
    }>;
    getQuestions(surveyMasterId: number): Promise<{
        ratingQuestion: SurveyQuestionMaster[];
        optionQuestion: SurveyQuestionMaster[];
    }>;
}
