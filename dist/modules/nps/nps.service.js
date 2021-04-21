"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const survey_client_leads_answer_entity_1 = require("./entities/survey.client.leads.answer.entity");
const survey_client_leads_entity_1 = require("./entities/survey.client.leads.entity");
const survey_master_entity_1 = require("./entities/survey.master.entity.");
const survey_question_master_entity_1 = require("./entities/survey.question.master.entity");
const survey_question_option_entity_1 = require("./entities/survey.question.option.entity");
const moment = require("moment-timezone");
const { Op } = require('sequelize');
let NpsService = class NpsService {
    constructor(surveyMasterModel, surveyClientLeadsModel, surveyQuestionMasterModel, surveyClientLeadsAnswerModel, surveyQuestionOptionModel, sequelize) {
        this.surveyMasterModel = surveyMasterModel;
        this.surveyClientLeadsModel = surveyClientLeadsModel;
        this.surveyQuestionMasterModel = surveyQuestionMasterModel;
        this.surveyClientLeadsAnswerModel = surveyClientLeadsAnswerModel;
        this.surveyQuestionOptionModel = surveyQuestionOptionModel;
        this.sequelize = sequelize;
    }
    async insertClientLeads(createClientLeadsDto) {
        return await this.surveyClientLeadsModel.create(createClientLeadsDto);
    }
    async insertClientLeadsAnswer(createClientLeadsAnswerDto) {
        const foundItem = await this.surveyClientLeadsAnswerModel.findOne({ where: {
                ClientCode: createClientLeadsAnswerDto.ClientCode,
                SurveyMasterId: createClientLeadsAnswerDto.SurveyMasterId
            } });
        if (!foundItem) {
            const item = await this.surveyClientLeadsAnswerModel.create(createClientLeadsAnswerDto);
            return { item, created: true };
        }
        else {
            const isDateLessThan3Months = await this.surveyClientLeadsAnswerModel.findOne({
                where: {
                    ClientCode: createClientLeadsAnswerDto.ClientCode,
                    createdAt: {
                        [Op.gte]: moment().subtract(3, 'months')
                    }
                }
            });
            if (!isDateLessThan3Months) {
                const item = await this.surveyClientLeadsAnswerModel.create(createClientLeadsAnswerDto);
                return { item, created: true };
            }
            else {
                const item = await this.surveyClientLeadsAnswerModel.update(createClientLeadsAnswerDto, { where: {
                        ClientCode: createClientLeadsAnswerDto.ClientCode
                    } });
                return { item, created: false, updated: true };
            }
        }
    }
    async getQuestions(surveyMasterId) {
        const ratingQuestion = await this.surveyQuestionMasterModel.findAll({
            attributes: [['Id', 'SurveyQuestionMasterId'], 'QstType', 'Questions'],
            where: {
                SurveyMasterId: surveyMasterId,
                QstType: 'Rating'
            }
        });
        const optionQuestion = await this.surveyQuestionMasterModel.findAll({
            attributes: [['Id', 'SurveyQuestionMasterId'], 'QstType', 'Questions'],
            where: {
                SurveyMasterId: surveyMasterId,
                QstType: 'Option'
            },
            include: {
                model: this.surveyQuestionOptionModel,
                attributes: [['Id', 'SurveyQuestionOptionId'], 'Options'],
            }
        });
        return {
            ratingQuestion,
            optionQuestion
        };
    }
};
NpsService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(survey_master_entity_1.SurveyMaster)),
    __param(1, sequelize_1.InjectModel(survey_client_leads_entity_1.SurveyClientLeads)),
    __param(2, sequelize_1.InjectModel(survey_question_master_entity_1.SurveyQuestionMaster)),
    __param(3, sequelize_1.InjectModel(survey_client_leads_answer_entity_1.SurveyClientLeadsAnswer)),
    __param(4, sequelize_1.InjectModel(survey_question_option_entity_1.SurveyQuestionOption)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, sequelize_typescript_1.Sequelize])
], NpsService);
exports.NpsService = NpsService;
//# sourceMappingURL=nps.service.js.map