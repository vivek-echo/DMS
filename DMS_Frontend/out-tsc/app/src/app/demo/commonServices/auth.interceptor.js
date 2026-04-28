import { inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlertHelperService } from './alert-helper-service';
import { AuthService } from './auth.service';
import { HTTP_STATUS } from './http-status.constants';
export const authInterceptor = (request, next) => {
    const alertHelper = inject(AlertHelperService);
    const authService = inject(AuthService);
    const modalService = inject(NgbModal);
    const token = localStorage.getItem('auth_token');
    const isApiRequest = request.url.startsWith(environment.apiBaseUrl);
    const isLoginRequest = request.url === `${environment.apiBaseUrl}/login`;
    const updatedRequest = isApiRequest
        ? request.clone({
            setHeaders: {
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
                Accept: 'application/json'
            }
        })
        : request;
    const handleSessionExpired = () => {
        return alertHelper.viewAlert('error', 'EXPIRED', 'Session Expired! Please log in again.').then(() => {
            modalService.dismissAll();
            authService.logout();
        });
    };
    return next(updatedRequest).pipe(catchError((error) => {
        if (error.status === HTTP_STATUS.UNAUTHORIZED &&
            !isLoginRequest &&
            token) {
            void handleSessionExpired();
        }
        return throwError(() => error);
    }));
};
//# sourceMappingURL=auth.interceptor.js.map