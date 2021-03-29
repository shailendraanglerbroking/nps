import {
    Table,
    Model,
    Column,
    DataType,
    BelongsTo
  } from 'sequelize-typescript';
import { SurveyMaster } from './survey.master.entity.';
import { SurveyQuestionMaster } from './survey.question.master.entity';
  
  @Table({
    tableName: 'SurveyQuestionMapping',
  })
  export class SurveyQuestionMapping extends Model<SurveyQuestionMapping> {
    @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    })
    MapId: number;

@BelongsTo(() => SurveyMaster, 'SurveyMasterId')
SurveyMaster: SurveyMaster;
@Column({
    type: DataType.INTEGER,
})
SurveyMasterId: number;

@BelongsTo(() => SurveyQuestionMaster, 'SurveyQuestionId')
SurveyQuestionMaster: SurveyQuestionMaster;
@Column({
    type: DataType.INTEGER,
})
SurveyQuestionId: number;

}