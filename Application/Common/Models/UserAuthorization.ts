import IContext from "../Interfaces/IContext";
import AuthResult from "./AuthResult";

export default class UserAuthorization {

    Context: IContext;

    constructor(context: IContext){
        this.Context = context;
    }

    public static Authorize(currentUser: AuthResult, roles: number[]): boolean {
        let matched = currentUser.Roles.filter(r => (roles.indexOf(r.RoleId) >= 0));
        return matched.length == roles.length;
    }

}