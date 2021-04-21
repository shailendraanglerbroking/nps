"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const survey_client_leads_answer_entity_1 = require("../../modules/nps/entities/survey.client.leads.answer.entity");
const survey_client_leads_entity_1 = require("../../modules/nps/entities/survey.client.leads.entity");
const survey_master_entity_1 = require("../../modules/nps/entities/survey.master.entity.");
const survey_question_master_entity_1 = require("../../modules/nps/entities/survey.question.master.entity");
const survey_question_option_entity_1 = require("../../modules/nps/entities/survey.question.option.entity");
const constant_1 = require("../constant");
const database_config_1 = require("./database.config");
exports.databaseProviders = [{
        provide: constant_1.SEQUELIZE,
        useFactory: async () => {
            let config;
            switch (process.env.NODE_ENV) {
                case constant_1.DEVELOPMENT:
                    config = database_config_1.databaseConfig.development;
                    break;
                case constant_1.TEST:
                    config = database_config_1.databaseConfig.test;
                    break;
                case constant_1.PRODUCTION:
                    config = database_config_1.databaseConfig.production;
                    break;
                default:
                    config = database_config_1.databaseConfig.development;
            }
            const sequelize = new sequelize_typescript_1.Sequelize(config);
            sequelize.addModels([survey_master_entity_1.SurveyMaster, survey_question_option_entity_1.SurveyQuestionOption, survey_client_leads_answer_entity_1.SurveyClientLeadsAnswer, survey_question_master_entity_1.SurveyQuestionMaster, survey_client_leads_entity_1.SurveyClientLeads]);
            await sequelize.sync();
            return sequelize;
        },
    }];
//# sourceMappingURL=database.provider.js.map