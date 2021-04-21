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
exports.NpsController = void 0;
const common_1 = require("@nestjs/common");
const nps_service_1 = require("./nps.service");
const create_client_leads_answer_dto_1 = require("./dto/create-client-leads-answer.dto");
const swagger_1 = require("@nestjs/swagger");
const create_client_leads_dto_1 = require("./dto/create-client-leads.dto");
let NpsController = class NpsController {
    constructor(npsService) {
        this.npsService = npsService;
    }
    getRatingQuestion(surveyMasterId) {
        return this.npsService.getQuestions(surveyMasterId);
    }
    insertClientLeads(createClientLeadsDto) {
        console.log("body", createClientLeadsDto);
        return this.npsService.insertClientLeads(createClientLeadsDto);
    }
    insertClientLeadsAnswer(createClientLeadsAnswerDto) {
        console.log("body", createClientLeadsAnswerDto);
        return this.npsService.insertClientLeadsAnswer(createClientLeadsAnswerDto);
    }
};
__decorate([
    common_1.Get('/questions:surveyMasterId'),
    __param(0, common_1.Query('surveyMasterId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NpsController.prototype, "getRatingQuestion", null);
__decorate([
    common_1.Post('/client-leads'),
    swagger_1.ApiFoundResponse({
        description: 'returns the data about the client leads',
        type: create_client_leads_dto_1.CreateClientLeadsDto,
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_leads_dto_1.CreateClientLeadsDto]),
    __metadata("design:returntype", void 0)
], NpsController.prototype, "insertClientLeads", null);
__decorate([
    common_1.Post('/client-leads-answer'),
    swagger_1.ApiFoundResponse({
        description: 'returns the data about the client leads Answer',
        type: create_client_leads_answer_dto_1.CreateClientLeadsAnswerDto,
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_leads_answer_dto_1.CreateClientLeadsAnswerDto]),
    __metadata("design:returntype", void 0)
], NpsController.prototype, "insertClientLeadsAnswer", null);
NpsController = __decorate([
    swagger_1.ApiTags('nps'),
    common_1.Controller('nps'),
    __metadata("design:paramtypes", [nps_service_1.NpsService])
], NpsController);
exports.NpsController = NpsController;
//# sourceMappingURL=nps.controller.js.map