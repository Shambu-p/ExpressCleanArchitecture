import { Sequelize, DataTypes, Model } from 'sequelize';
import IBuilder from './IBuilder';
import Task from '../../../Domain/Entities/Task';

export default class TaskBuilder {

	static Build(sequelize: Sequelize): Model<any, any> {
		
		let model = sequelize.define('Task', {
			Id: {
				type: DataTypes.NUMBER,
				allowNull: false
			},
			Name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			FeatureId: {
				type: DataTypes.NUMBER,
				allowNull: false
			},
			StartDate: {
				type: DataTypes.DATE,
				allowNull: false
			},
			EndDate: {
				type: DataTypes.NUMBER,
				allowNull: false
			},
			Status: {
				type: DataTypes.STRING,
				allowNull: false
			},
			Time: {
				type: DataTypes.DATE,
				allowNull: false
			}
		}, {
			timestamps: true,
			createdAt: 'createTimestamp',
			updatedAt: 'updateTimestamp'
		});

		return new model();

	}

}