"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientLeadsProviders = void 0;
const constant_1 = require("../../../core/constant");
const survey_client_leads_entity_1 = require("../entities/survey.client.leads.entity");
exports.clientLeadsProviders = [
    {
        provide: constant_1.CLIENT_LEADS_REPOSITORY,
        useValue: survey_client_leads_entity_1.SurveyClientLeads,
    },
];
//# sourceMappingURL=client.leads.providers.js.map