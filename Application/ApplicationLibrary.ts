import AuthenticationInterface from "./Common/Interfaces/AuthenticationInterface";
import {
    CreateCategoryCommand,
    CreateCategoryLogic
} from "./CategoryModule/Commands/CreateCategoryCommand/CreateCategoryLogic";
import Response from "./Common/Response";
import CreateCategoryValidator from "./CategoryModule/Commands/CreateCategoryCommand/CreateCategoryValidator";
import IContext from "./Common/Interfaces/IContext";
import Category from "../Domain/Entities/Category";
import { GetCategories, GetCategoriesHandler } from "./CategoryModule/Queries/GetAllCategories/GetCategories";
import PaginatedListInterface from "./Common/Interfaces/PaginatedListInterface";

export default function (db: IContext, auth: AuthenticationInterface) {

    return {

        categoryModule: {
            /**
             * this method could throw validation errors
             * Creates Category using command passed to it
             * @param command
             */
            createCategoryRequest: async function (command: CreateCategoryCommand): Promise<Response> {
                new CreateCategoryValidator(command).Validate();
                return await new CreateCategoryLogic(db).Handle(command);
            },

            /**
             * this cmethod will return all saved categories
             * on database
             * @param command 
             * @returns 
             */
            getAllCategories: async function (command: GetCategories): Promise<PaginatedListInterface<Category>> {
                return await new GetCategoriesHandler(db).Handle(command);
            }
        },

    }

};