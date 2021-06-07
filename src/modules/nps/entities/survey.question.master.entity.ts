import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
import { SurveyClientLeadsAnswer } from './survey.client.leads.answer.entity';
import { SurveyMaster } from './survey.master.entity.';
import { SurveyQuestionOption } from './survey.question.option.entity';
import { SurveyRatingMaster } from './survey.rating.master.entity';

@Table({
  tableName: 'SurveyQuestionMaster',
})
export class SurveyQuestionMaster extends Model<SurveyQuestionMaster> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  })
  Id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Questions: string;

  @BelongsTo(() => SurveyMaster, 'SurveyMasterId')
  SurveyMaster: SurveyMaster;

  @Column({
    type: DataType.INTEGER,
  })
  SurveyMasterId: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  QstType: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  CreatedBy: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  UpdatedBy: number;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  updatedAt: Date;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  })
  Active: Boolean;

  @BelongsTo(() => SurveyRatingMaster, 'SurveyRatingMasterId')
  SurveyRatingMaster: SurveyRatingMaster;

  @HasMany(() => SurveyQuestionOption, 'SurveyQuestionMasterId')
  SurveyQuestionOption: SurveyQuestionOption;

  @HasMany(() => SurveyClientLeadsAnswer, 'SurveyQuestionMasterId')
  SurveyClientLeadsAnswer: SurveyClientLeadsAnswer;
}
