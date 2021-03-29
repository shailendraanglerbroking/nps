import {
    Table,
    Model,
    Column,
    DataType,
    BelongsTo
  } from 'sequelize-typescript';
import { SurveyMaster } from './survey.master.entity.';
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

    @BelongsTo(() => SurveyQuestionOption, 'SurveyQuestionOptionId')
    SurveyQuestionOption: SurveyQuestionOption;
    @Column({
      type: DataType.INTEGER,
  })
  SurveyQuestionOptionId: number; 

    @Column({
      type: DataType.INTEGER,
      allowNull: true,
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
        allowNull: true,
        defaultValue: Date.now
      })
      CreatedOn: Date;
    
    @Column({
        type: DataType.DATE,
        allowNull: true,
      })
      UpdatedOn: Date;

    @Column({
      type: DataType.INTEGER,
      allowNull: true,
    })
    UpdatedBy: number;    
  
    @Column({
      type: DataType.BOOLEAN,
      allowNull: true,
    })
    Active: Boolean;

      @Column({
        type: DataType.BOOLEAN,
        allowNull: true,
      })
      IsFreeTRD: Boolean;
  }
  
