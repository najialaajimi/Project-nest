import { Model } from 'mongoose';
import { Categories, CategoriesDocument } from '../schema/schema.Categories';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesService {
    private readonly categoryModel;
    constructor(categoryModel: Model<CategoriesDocument>);
    create(createCategoryDto: CreateCategoryDto): Promise<Categories>;
    findAll(): Promise<Categories[]>;
    findOne(id: string): Promise<Categories>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Categories>;
    remove(id: string): Promise<Categories>;
}
