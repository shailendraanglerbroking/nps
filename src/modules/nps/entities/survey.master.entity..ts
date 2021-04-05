import {
    Table,
    Model,
    Column,
    DataType,
    HasMany
  } from 'sequelize-typescript';
import { SurveyClientLeadsAnswer } from './survey.client.leads.answer.entity';
import { SurveyClientLeads } from './survey.client.leads.entity';
import { SurveyQuestionMaster } from './survey.question.master.entity';
  
  @Table({
    tableName: 'SurveyMaster',
  })
  export class SurveyMaster extends Model<SurveyMaster> {
    @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    })
    Id: number;
  
    @Column({
      type: DataType.STRING(150),
      allowNull: false,
    })
    SurveyName: string;
    
    @Column({
      type: DataType.STRING(50),
      allowNull: true,
    })
    SurveyCode: string;
    
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
      })
      CreatedBy: number;

      @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: Date.now
      })
      createdAt: Date;
     
      @Column({
        type: DataType.DATE,
        allowNull: true,
      })
      updatedAt: Date;
    
      @Column({
        type: DataType.INTEGER,
        allowNull: true,
      })
      UpdatedBy: number;    
  
    @Column({
      type: DataType.BOOLEAN,
      allowNull: true,
      defaultValue: true
    })
    Active: Boolean;

    @HasMany(() => SurveyQuestionMaster, 'SurveyMasterId')
    SurveyQuestionMaster: SurveyQuestionMaster;

    @HasMany(() => SurveyClientLeadsAnswer, 'SurveyMasterId')
    SurveyClientLeadsAnswer: SurveyClientLeadsAnswer;

    @HasMany(() => SurveyClientLeads, 'SurveyMasterId')
    SurveyClientLeads: SurveyClientLeads;
  }
  
