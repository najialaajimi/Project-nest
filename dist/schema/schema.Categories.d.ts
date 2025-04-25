import { HydratedDocument } from 'mongoose';
export type CategoriesDocument = HydratedDocument<Categories>;
export declare class Categories {
    static readonly name = "Categories";
    name: string;
}
export declare const CategoriesSchema: import("mongoose").Schema<Categories, import("mongoose").Model<Categories, any, any, any, import("mongoose").Document<unknown, any, Categories> & Categories & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Categories, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Categories>> & import("mongoose").FlatRecord<Categories> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
