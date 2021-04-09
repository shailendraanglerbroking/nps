import {
    Table,
    Model,
    Column,
    DataType,
    BelongsTo
  } from 'sequelize-typescript';
import { SurveyMaster } from './survey.master.entity.';
  
  @Table({
    tableName: 'SurveyClientLeads',
  })
  export class SurveyClientLeads extends Model<SurveyClientLeads> {
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
    
    @Column({
        type: DataType.DATE,
        allowNull: false,
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
    
    @Column({
      type: DataType.STRING(100),
      allowNull: true,
    })
    Source: string;

  }
  
