import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'user',
})
export class Agent extends Model<Agent> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;
  @Column(DataType.INTEGER)
  mode: number;
  @Column
  location: string;
  @Column
  recommendCode: string;
  @Column(DataType.BOOLEAN)
  isEnable: boolean;
  @Column(DataType.DATE)
  stopDate: Date;
  @Column
  company: string;
  @Column
  person: string;
  @Column
  bankInfo: string;
  @Column
  owners: string;
  @Column
  members: string;
  @Column
  phone: string;
  @Column(DataType.BOOLEAN)
  approved: boolean;
  @Column(DataType.INTEGER)
  pod: number;
  @Column
  batch: string;
  withdrawMoney: number;
  recommendMoney: number;
  roleId: number;
  account: string;
  password: string;
  salt: number;
  remark: string;
  pwdIsModified: boolean;
}
