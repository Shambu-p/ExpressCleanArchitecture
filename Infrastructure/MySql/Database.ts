import Records from "./Record";
import { Sequelize, DataTypes } from 'sequelize';
// const mysql = require('mysql2/promise');
const sequelize = new Sequelize('mysql2');
// import Connection from "mysql2/typings/mysql/lib/Connection";

export default class Database {

    public static Connection: any = null;
    private static isOnTransaction = false;
    private readonly Configuration: any = null;

    constructor(configuration: any){
        this.Configuration = configuration;
    }

    async Query<T>(query: string, param?: (any)): Promise<Records<T>> {

        // await this.Connect();
        // Database.Connection.config.namedPlaceholders = true;
        // const [results, fields] = await Database.Connection.execute(query, param ?? {});
        // return new Records<T>(results);
        throw new Error("mysql quering method is changed");

    }

    private async Connect(){
        
        // if(!Database.Connection){
        //     Database.Connection = new Sequelize(this.Configuration.database, this.Configuration.user, this.Configuration.password, {
        //         host: this.Configuration.host,
        //         dialect: 'mysql'
        //     });
        // }

        return new Sequelize(this.Configuration.database, this.Configuration.user, this.Configuration.password, {
            host: this.Configuration.host,
            dialect: 'mysql'
        });

    }

    async beginTransaction(): Promise<void> {
        
        if(!Database.isOnTransaction) {
            await this.Query(`START TRANSACTION; SAVEPOINT default_savepoint;`);
            Database.isOnTransaction = true;
        }

    }
    
    async reverse(): Promise<void> {
        
        if(Database.isOnTransaction){
            await this.Query(`ROLLBACK TO default_savepoint; ROLLBACK;`);
            Database.isOnTransaction = false;
        }

    }

    async commit(): Promise<void> {

        if(Database.isOnTransaction){
            await this.Query(`COMMIT;`);
            Database.isOnTransaction = false;
        }

    }

    async savePoint(name: string): Promise<void> {

        if(Database.isOnTransaction){
            await this.Query(`SAVEPOINT :save_point_name;`, {save_point_name: name});
        }else{
            await this.Query(`START TRANSACTION; SAVEPOINT default_savepoint; SAVEPOINT :save_point_name;`, {save_point_name: name});
        }

    }

    async releaseSavePoint(name: string): Promise<void> {
        if(Database.isOnTransaction){
            await this.Query(`RELEASE SAVEPOINT :save_point_name;`, {save_point_name: name});
        }
    }

    async rollback(name: string) {
        if (Database.isOnTransaction) {
            await this.Query(`ROLLBACK TO :save_point_name;`, {save_point_name: name});
        }
    }

}