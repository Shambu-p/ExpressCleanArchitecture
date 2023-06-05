import { Model, ModelCtor, Sequelize } from 'sequelize';

export default interface IBuilder {

    Build(sequelize: Sequelize): Model<any, any>

}