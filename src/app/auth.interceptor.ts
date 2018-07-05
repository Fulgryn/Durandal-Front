import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var clonedRequest;
        if (sessionStorage.getItem('auth')) {
            // Si les informations d'authentification existe dans la session utilisateur
            // Clonage de la requête (les requêtes sont immuables et ajout du header d'authentification
            // qu'on aura préalablement ajouté au sessionStorage lors d'une authentification réussie
            clonedRequest = req.clone({ headers: req.headers.set('Authorization', 'Basic ' + sessionStorage.getItem('auth')) });            
        } else {
            // Dans le cas contraire, on laisse passer la requête telle quelle
            clonedRequest = req;
        }

        // On laisse passer la requête (modifiée ou non) au filtre suivant
        return next.handle(clonedRequest);
    }
}
