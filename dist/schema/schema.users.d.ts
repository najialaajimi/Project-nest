import { Document } from 'mongoose';
export type UserDocument = Users & Document;
export declare class Users {
    static readonly name = "Users";
    username: string;
    password: string;
    role: string;
}
export declare const UserSchema: import("mongoose").Schema<Users, import("mongoose").Model<Users, any, any, any, Document<unknown, any, Users> & Users & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Users, Document<unknown, {}, import("mongoose").FlatRecord<Users>> & import("mongoose").FlatRecord<Users> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
