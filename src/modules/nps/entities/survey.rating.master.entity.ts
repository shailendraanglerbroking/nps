import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { SurveyQuestionMaster } from './survey.question.master.entity';

@Table({
  tableName: 'SurveyRatingMaster',
})
export class SurveyRatingMaster extends Model<SurveyRatingMaster> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  })
  Id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  MinRating: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  MaxRating: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  Type: string;

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
  CreatedBy: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  UpdatedBy: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  })
  Active: Boolean;

  @HasMany(() => SurveyQuestionMaster, 'SurveyRatingMasterId')
  SurveyQuestionMaster: SurveyQuestionMaster;
}
