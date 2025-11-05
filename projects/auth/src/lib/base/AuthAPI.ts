import { Observable } from 'rxjs';

export abstract class AuthAPI {
  abstract login(data: any): Observable<any>;
  abstract register(data: any): Observable<any>;
  abstract changePassword(data: any): Observable<any>;
}
