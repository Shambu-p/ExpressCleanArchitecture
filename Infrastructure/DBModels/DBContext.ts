import Database from "./Database";
import Category from "../../Domain/Entities/Category";
import DBTable from "./DBTable";
import IContext from "../../Application/Common/Interfaces/IContext";
import ContextModel from "./ContextModel";
import Role from "../../Domain/Entities/Role";
import APIKey from "../../Domain/Entities/APIKey";
import IDBTable from "../../Application/Common/Interfaces/IDBTable";
import Permission from "../../Domain/Entities/Permission";
import User from "../../Domain/Entities/User";

export default class DBContext extends ContextModel implements IContext {

    constructor(db: Database){ super(db); }
    public Permissions = this.getTable<Permission>("Permissions");
    public Categories = this.getTable<Category>("Categories");
    public Roles = this.getTable<Role>("Roles");
    public APIKeys = this.getTable<APIKey>("APIKeys");

}