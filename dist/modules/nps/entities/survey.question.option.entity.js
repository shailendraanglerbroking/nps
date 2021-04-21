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
exports.SurveyQuestionOption = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const survey_client_leads_answer_entity_1 = require("./survey.client.leads.answer.entity");
const survey_question_master_entity_1 = require("./survey.question.master.entity");
let SurveyQuestionOption = class SurveyQuestionOption extends sequelize_typescript_1.Model {
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
], SurveyQuestionOption.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => survey_question_master_entity_1.SurveyQuestionMaster, 'SurveyQuestionMasterId'),
    __metadata("design:type", survey_question_master_entity_1.SurveyQuestionMaster)
], SurveyQuestionOption.prototype, "SurveyQuestionMaster", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], SurveyQuestionOption.prototype, "SurveyQuestionMasterId", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], SurveyQuestionOption.prototype, "Options", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], SurveyQuestionOption.prototype, "CreatedBy", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], SurveyQuestionOption.prototype, "UpdatedBy", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], SurveyQuestionOption.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: true,
    }),
    __metadata("design:type", Date)
], SurveyQuestionOption.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: true,
        defaultValue: true
    }),
    __metadata("design:type", Boolean)
], SurveyQuestionOption.prototype, "Active", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => survey_client_leads_answer_entity_1.SurveyClientLeadsAnswer, 'SurveyQuestionOptionId'),
    __metadata("design:type", survey_client_leads_answer_entity_1.SurveyClientLeadsAnswer)
], SurveyQuestionOption.prototype, "SurveyClientLeadsAnswer", void 0);
SurveyQuestionOption = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'SurveyQuestionOption',
    })
], SurveyQuestionOption);
exports.SurveyQuestionOption = SurveyQuestionOption;
//# sourceMappingURL=survey.question.option.entity.js.map