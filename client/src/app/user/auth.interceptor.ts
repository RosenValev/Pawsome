import { Injectable, Provider } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            withCredentials: true,
        });
        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    const jwtToken = this.extractJwtTokenFromCookies(event);
                    if (jwtToken) {
                        this.userService.setJwtToken(jwtToken);
                    }
                }
            })
        );
    }

    private extractJwtTokenFromCookies(event: HttpResponse<any>): string | null {
        const cookies = event.headers.get('Set-Cookie');
        debugger
        if (cookies) {
            const jwtCookie = cookies.split(';').find(cookie => cookie.trim().startsWith('auth='));
            if (jwtCookie) {
                return jwtCookie.split('=')[1];
            }
        }
        return null;
    }


}

export const ResponseInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: ResponseInterceptor
}
