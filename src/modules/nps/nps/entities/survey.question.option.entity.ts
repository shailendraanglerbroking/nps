import {
    Table,
    Model,
    Column,
    DataType,
    BelongsTo,
    HasMany,
  } from 'sequelize-typescript';
import { SurveyClientLeadsAnswer } from './survey.client.leads.answer.entity';
import { SurveyQuestionMaster } from './survey.question.master.entity';
  
  @Table({
    tableName: 'SurveyQuestionOption',
  })
  export class SurveyQuestionOption extends Model<SurveyQuestionOption> {
    @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    })
    Id: number;

    @BelongsTo(() => SurveyQuestionMaster, 'SurveyQuestionMasterId')
    SurveyQuestionMaster: SurveyQuestionMaster;
    @Column({
        type: DataType.INTEGER,
    })
    SurveyQuestionMasterId: number;
  
    @Column({
      type: DataType.STRING,
      allowNull: true,
    })
    Options: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
      })
      CreatedBy: number;
    
      @Column({
        type: DataType.INTEGER,
        allowNull: true,
      })
      UpdatedBy: number;
  
    @Column({
      type: DataType.DATE,
      allowNull: false,
      defaultValue: Date.now
    })
    CreatedOn: Date;
  
    @Column({
      type: DataType.DATE,
      allowNull: true,
    })
    UpdatedOn: Date;
  
    @Column({
      type: DataType.BOOLEAN,
      allowNull: true,
    })
    Active: Boolean;
  
    @HasMany(() => SurveyClientLeadsAnswer, 'SurveyQuestionOptionId')
    SurveyClientLeadsAnswer: SurveyClientLeadsAnswer;
  }
  
