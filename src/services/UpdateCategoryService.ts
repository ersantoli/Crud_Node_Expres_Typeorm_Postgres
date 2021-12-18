import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryUpdateRequest = {
    id: string;
    name: string;
    description: string;

};

export class UpdateCategoryService {
    async execute({id, name, description}: Category){

     const  repo = getRepository(Category);

     const category = await repo.findOne(id);

     if(!category){
         return new Error("Category does not Exists!");
     }

     category.name = name ? name : category.name;
     category.description = description ? description : category.description;

     await repo.save(category);
     return category;
    }
     
}