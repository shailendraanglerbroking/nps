import { NpsService } from './nps.service';
import { CreateClientLeadsAnswerDto } from './dto/create-client-leads-answer.dto';
import { CreateClientLeadsDto } from './dto/create-client-leads.dto';
export declare class NpsController {
    private readonly npsService;
    constructor(npsService: NpsService);
    getRatingQuestion(surveyMasterId: number): Promise<{
        ratingQuestion: import("./entities/survey.question.master.entity").SurveyQuestionMaster[];
        optionQuestion: import("./entities/survey.question.master.entity").SurveyQuestionMaster[];
    }>;
    insertClientLeads(createClientLeadsDto: CreateClientLeadsDto): Promise<import("./entities/survey.client.leads.entity").SurveyClientLeads>;
    insertClientLeadsAnswer(createClientLeadsAnswerDto: CreateClientLeadsAnswerDto): Promise<{
        item: import("./entities/survey.client.leads.answer.entity").SurveyClientLeadsAnswer;
        created: boolean;
        updated?: undefined;
    } | {
        item: [number, import("./entities/survey.client.leads.answer.entity").SurveyClientLeadsAnswer[]];
        created: boolean;
        updated: boolean;
    }>;
}
