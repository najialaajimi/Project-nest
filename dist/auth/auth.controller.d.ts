import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: {
        username: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    register(body: {
        username: string;
        password: string;
        role?: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("../schema/schema.users").UserDocument> & import("../schema/schema.users").Users & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
