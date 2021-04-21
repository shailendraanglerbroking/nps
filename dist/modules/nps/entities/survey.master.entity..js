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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyMaster = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const survey_client_leads_answer_entity_1 = require("./survey.client.leads.answer.entity");
const survey_client_leads_entity_1 = require("./survey.client.leads.entity");
const survey_question_master_entity_1 = require("./survey.question.master.entity");
let SurveyMaster = class SurveyMaster extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", Number)
], SurveyMaster.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING(150),
        allowNull: false,
        unique: true
    }),
    __metadata("design:type", String)
], SurveyMaster.prototype, "SurveyName", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING(50),
        allowNull: true,
    }),
    __metadata("design:type", String)
], SurveyMaster.prototype, "SurveyCode", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], SurveyMaster.prototype, "CreatedBy", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], SurveyMaster.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: true
    }),
    __metadata("design:type", Date)
], SurveyMaster.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], SurveyMaster.prototype, "UpdatedBy", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: true,
        defaultValue: true
    }),
    __metadata("design:type", Boolean)
], SurveyMaster.prototype, "Active", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => survey_question_master_entity_1.SurveyQuestionMaster, 'SurveyMasterId'),
    __metadata("design:type", survey_question_master_entity_1.SurveyQuestionMaster)
], SurveyMaster.prototype, "SurveyQuestionMaster", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => survey_client_leads_answer_entity_1.SurveyClientLeadsAnswer, 'SurveyMasterId'),
    __metadata("design:type", survey_client_leads_answer_entity_1.SurveyClientLeadsAnswer)
], SurveyMaster.prototype, "SurveyClientLeadsAnswer", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => survey_client_leads_entity_1.SurveyClientLeads, 'SurveyMasterId'),
    __metadata("design:type", survey_client_leads_entity_1.SurveyClientLeads)
], SurveyMaster.prototype, "SurveyClientLeads", void 0);
SurveyMaster = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'SurveyMaster',
    })
], SurveyMaster);
exports.SurveyMaster = SurveyMaster;
//# sourceMappingURL=survey.master.entity..js.map