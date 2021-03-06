import { Sequelize } from 'sequelize-typescript';
import { SurveyClientLeadsAnswer } from 'src/modules/nps/entities/survey.client.leads.answer.entity';
import { SurveyClientLeads } from 'src/modules/nps/entities/survey.client.leads.entity';
import { SurveyMaster } from 'src/modules/nps/entities/survey.master.entity.';
import { SurveyQuestionMaster } from 'src/modules/nps/entities/survey.question.master.entity';
import { SurveyQuestionOption } from 'src/modules/nps/entities/survey.question.option.entity';
import { SurveyRatingMaster } from 'src/modules/nps/entities/survey.rating.master.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constant';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([
        SurveyMaster,
        SurveyQuestionOption,
        SurveyClientLeadsAnswer,
        SurveyQuestionMaster,
        SurveyClientLeads,
        SurveyRatingMaster
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
