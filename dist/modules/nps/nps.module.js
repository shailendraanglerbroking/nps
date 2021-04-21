"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpsModule = void 0;
const common_1 = require("@nestjs/common");
const nps_service_1 = require("./nps.service");
const nps_controller_1 = require("./nps.controller");
const sequelize_1 = require("@nestjs/sequelize");
const survey_master_entity_1 = require("./entities/survey.master.entity.");
const survey_question_option_entity_1 = require("./entities/survey.question.option.entity");
const survey_client_leads_entity_1 = require("./entities/survey.client.leads.entity");
const survey_client_leads_answer_entity_1 = require("./entities/survey.client.leads.answer.entity");
const survey_question_master_entity_1 = require("./entities/survey.question.master.entity");
let NpsModule = class NpsModule {
};
NpsModule = __decorate([
    common_1.Module({
        imports: [sequelize_1.SequelizeModule.forFeature([
                survey_master_entity_1.SurveyMaster,
                survey_client_leads_entity_1.SurveyClientLeads,
                survey_client_leads_answer_entity_1.SurveyClientLeadsAnswer,
                survey_question_master_entity_1.SurveyQuestionMaster,
                survey_question_option_entity_1.SurveyQuestionOption
            ]),],
        controllers: [nps_controller_1.NpsController],
        providers: [nps_service_1.NpsService]
    })
], NpsModule);
exports.NpsModule = NpsModule;
//# sourceMappingURL=nps.module.js.map