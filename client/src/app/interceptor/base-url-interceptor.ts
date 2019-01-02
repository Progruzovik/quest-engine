import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Inject, Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class BaseUrlInterceptor implements HttpInterceptor {

    constructor(@Inject("baseApiUrl") private readonly baseUrl: string) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const baseUrlRequest = req.clone({ url: `${this.baseUrl}/${req.url}` });
        return next.handle(baseUrlRequest);
    }
}
