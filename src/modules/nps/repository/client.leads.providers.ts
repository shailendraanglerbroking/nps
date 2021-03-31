import { CLIENT_LEADS_REPOSITORY } from 'src/core/constant';
import { SurveyClientLeads } from '../entities/survey.client.leads.entity';

export const clientLeadsProviders = [
    {
        provide: CLIENT_LEADS_REPOSITORY,
        useValue: SurveyClientLeads,
    },
];