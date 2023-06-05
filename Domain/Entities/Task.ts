import { Model } from "sequelize"

export default interface Task {
    Id: number;
	Name: string;
	FeatureId: number;
	StartDate: number | null;
	EndDate: number;
	Status: 'pending' | 'active' | 'finished';
	Time: Date | null;
}