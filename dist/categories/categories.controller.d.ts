import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): Promise<import("../schema/schema.Categories").Categories>;
    findAll(): Promise<import("../schema/schema.Categories").Categories[]>;
    findOne(id: string): Promise<import("../schema/schema.Categories").Categories>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("../schema/schema.Categories").Categories>;
    remove(id: string): Promise<import("../schema/schema.Categories").Categories>;
}
