import { Model } from 'mongoose';
import { Users, UserDocument } from '../schema/schema.users';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findByUsername(username: string): Promise<(import("mongoose").Document<unknown, {}, UserDocument> & Users & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    create(username: string, password: string, role: string): Promise<import("mongoose").Document<unknown, {}, UserDocument> & Users & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
