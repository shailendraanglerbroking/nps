import {
    Table,
    Model,
    Column,
    DataType,
    BelongsTo
  } from 'sequelize-typescript';
import { SurveyMaster } from './survey.master.entity.';
import { SurveyQuestionMaster } from './survey.question.master.entity';
import { SurveyQuestionOption } from './survey.question.option.entity';
  
  @Table({
    tableName: 'SurveyClientLeadsAnswer',
  })
  export class SurveyClientLeadsAnswer extends Model<SurveyClientLeadsAnswer> {
    @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    })
    Id: number;
  
    @BelongsTo(() => SurveyMaster, 'SurveyMasterId')
    SurveyMaster: SurveyMaster;
    @Column({
      type: DataType.INTEGER,
  })
  SurveyMasterId: number;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  ClientCode: string;

  @BelongsTo(() => SurveyQuestionMaster, 'SurveyQuestionMasterId')
  SurveyQuestionMaster: SurveyQuestionMaster;
    @Column({
      type: DataType.INTEGER,
  })
  SurveyQuestionMasterId: number; 

    @BelongsTo(() => SurveyQuestionOption, 'SurveyQuestionOptionId')
    SurveyQuestionOption: SurveyQuestionOption;
    @Column({
      type: DataType.INTEGER,
  })
  SurveyQuestionOptionId: number; 

    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    Rating: number;

    @Column({
      type: DataType.STRING,
      allowNull: true,
    })
    Comments: string;

    @Column({
      type: DataType.STRING,
      allowNull: true,
    })
    AnyOther: string;
    
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

  }
  
