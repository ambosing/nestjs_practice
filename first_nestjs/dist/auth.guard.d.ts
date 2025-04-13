import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
export declare class AuthGuard implements CanActivate {
    private authService;
    constructor(authService: AuthService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    private validateRequest;
}
