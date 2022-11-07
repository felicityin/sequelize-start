import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty } from "sequelize-typescript";

@Table
export class User extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number
    
    @AllowNull(false)
    @NotEmpty
    @Column
    firstName!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    lastName!: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    age!: number;
}