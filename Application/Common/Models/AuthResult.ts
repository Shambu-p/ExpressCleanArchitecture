import Permission from "../../../Domain/Entities/Permission";
import Role from "../../../Domain/Entities/Role";

export default interface AuthResult {
    Token: string,
    Id: number,
    FullName: string,
    Roles: Permission[]
}