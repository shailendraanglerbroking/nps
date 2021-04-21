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
exports.SurveyQuestionMaster = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const survey_client_leads_answer_entity_1 = require("./survey.client.leads.answer.entity");
const survey_master_entity_1 = require("./survey.master.entity.");
const survey_question_option_entity_1 = require("./survey.question.option.entity");
let SurveyQuestionMaster = class SurveyQuestionMaster extends sequelize_typescript_1.Model {
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
], SurveyQuestionMaster.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], SurveyQuestionMaster.prototype, "Questions", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => survey_master_entity_1.SurveyMaster, 'SurveyMasterId'),
    __metadata("design:type", survey_master_entity_1.SurveyMaster)
], SurveyQuestionMaster.prototype, "SurveyMaster", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], SurveyQuestionMaster.prototype, "SurveyMasterId", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING(50),
        allowNull: false,
    }),
    __metadata("design:type", String)
], SurveyQuestionMaster.prototype, "QstType", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], SurveyQuestionMaster.prototype, "CreatedBy", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], SurveyQuestionMaster.prototype, "UpdatedBy", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: true,
    }),
    __metadata("design:type", Date)
], SurveyQuestionMaster.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: true,
    }),
    __metadata("design:type", Date)
], SurveyQuestionMaster.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: true,
        defaultValue: true
    }),
    __metadata("design:type", Boolean)
], SurveyQuestionMaster.prototype, "Active", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => survey_question_option_entity_1.SurveyQuestionOption, 'SurveyQuestionMasterId'),
    __metadata("design:type", survey_question_option_entity_1.SurveyQuestionOption)
], SurveyQuestionMaster.prototype, "SurveyQuestionOption", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => survey_client_leads_answer_entity_1.SurveyClientLeadsAnswer, 'SurveyQuestionMasterId'),
    __metadata("design:type", survey_client_leads_answer_entity_1.SurveyClientLeadsAnswer)
], SurveyQuestionMaster.prototype, "SurveyClientLeadsAnswer", void 0);
SurveyQuestionMaster = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'SurveyQuestionMaster',
    })
], SurveyQuestionMaster);
exports.SurveyQuestionMaster = SurveyQuestionMaster;
//# sourceMappingURL=survey.question.master.entity.js.map