import ConfigurationService from "../Services/ConfigurationService";
import Database from "./DBModels/Database";
import Authentication from "./Authentication/Authentication";
import DBContext from "./DBModels/DBContext";
import Identity from "./Authentication/Identity";
import Mailer from "./SendMail/Mailer";

export default function lib (config: ConfigurationService): {
    Database: DBContext,
    Authentication: Authentication
    Identity: Identity,
    Mailer: Mailer
} {
    let db = new Database(config.getConfiguration("db"));
    let ident = new Identity(config.getConfiguration("identity"), db);
    let mail = new Mailer(config.getConfiguration("mail"));

    return {
        Database: new DBContext(db),
        Authentication: new Authentication(config.getConfiguration("auth"), ident),
        Identity: ident,
        Mailer: mail
    }

};