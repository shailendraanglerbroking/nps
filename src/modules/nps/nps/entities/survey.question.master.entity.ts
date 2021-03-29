import {
    Table,
    Model,
    Column,
    DataType,
    HasMany,
  } from 'sequelize-typescript';
import { SurveyQuestionMapping } from './survey.question.mapping.entity';
import { SurveyQuestionOption } from './survey.question.option.entity';
  
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
  
    @HasMany(() => SurveyQuestionMapping, 'SurveyQuestionId')
    SurveyQuestionMapping: SurveyQuestionMapping;

    @HasMany(() => SurveyQuestionOption, 'Id')
    SurveyQuestionOption: SurveyQuestionOption;
  }
  
