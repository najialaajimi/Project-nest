import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserDocument } from '../schema/schema.users';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: UserDocument): {
        access_token: string;
    };
    register(username: string, password: string, role?: string): Promise<import("mongoose").Document<unknown, {}, UserDocument> & import("../schema/schema.users").Users & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
