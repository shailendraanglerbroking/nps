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
exports.SurveyClientLeadsAnswer = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const survey_master_entity_1 = require("./survey.master.entity.");
const survey_question_master_entity_1 = require("./survey.question.master.entity");
const survey_question_option_entity_1 = require("./survey.question.option.entity");
let SurveyClientLeadsAnswer = class SurveyClientLeadsAnswer extends sequelize_typescript_1.Model {
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
], SurveyClientLeadsAnswer.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => survey_master_entity_1.SurveyMaster, 'SurveyMasterId'),
    __metadata("design:type", survey_master_entity_1.SurveyMaster)
], SurveyClientLeadsAnswer.prototype, "SurveyMaster", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], SurveyClientLeadsAnswer.prototype, "SurveyMasterId", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING(200),
        allowNull: false,
    }),
    __metadata("design:type", String)
], SurveyClientLeadsAnswer.prototype, "ClientCode", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => survey_question_master_entity_1.SurveyQuestionMaster, 'SurveyQuestionMasterId'),
    __metadata("design:type", survey_question_master_entity_1.SurveyQuestionMaster)
], SurveyClientLeadsAnswer.prototype, "SurveyQuestionMaster", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], SurveyClientLeadsAnswer.prototype, "SurveyQuestionMasterId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => survey_question_option_entity_1.SurveyQuestionOption, 'SurveyQuestionOptionId'),
    __metadata("design:type", survey_question_option_entity_1.SurveyQuestionOption)
], SurveyClientLeadsAnswer.prototype, "SurveyQuestionOption", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], SurveyClientLeadsAnswer.prototype, "SurveyQuestionOptionId", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], SurveyClientLeadsAnswer.prototype, "Rating", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], SurveyClientLeadsAnswer.prototype, "Comments", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], SurveyClientLeadsAnswer.prototype, "AnyOther", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false
    }),
    __metadata("design:type", Date)
], SurveyClientLeadsAnswer.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: true,
    }),
    __metadata("design:type", Date)
], SurveyClientLeadsAnswer.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], SurveyClientLeadsAnswer.prototype, "UpdatedBy", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: true,
        defaultValue: true
    }),
    __metadata("design:type", Boolean)
], SurveyClientLeadsAnswer.prototype, "Active", void 0);
SurveyClientLeadsAnswer = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'SurveyClientLeadsAnswer',
    })
], SurveyClientLeadsAnswer);
exports.SurveyClientLeadsAnswer = SurveyClientLeadsAnswer;
//# sourceMappingURL=survey.client.leads.answer.entity.js.map