import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor() { }

    login(username: string, password: string): Observable<any> {
        // Mock login response
        return of({
            token: 'mock-jwt-token',
            id: 1,
            username: username || 'admin',
            email: 'admin@example.com',
            roles: ['ROLE_ADMIN']
        }).pipe(delay(1000));
    }

    register(username: string, email: string, password: string): Observable<any> {
        return of({ message: 'User registered successfully!' }).pipe(delay(1000));
    }
}
