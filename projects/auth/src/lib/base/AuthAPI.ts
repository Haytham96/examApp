import { Observable } from 'rxjs';

export abstract class AuthAPI {
  abstract login(data: any): Observable<any>;
  abstract register(data: any): Observable<any>;
  abstract changePassword(data: any): Observable<any>;
  abstract deleteAccount(): Observable<any>;
  abstract editProfile(data: any): Observable<any>;
  abstract logout(): Observable<any>;

  abstract loggedUserInfo(): Observable<any>;
  abstract forgotPassword(data: any): Observable<any>;
  abstract verifyResetCode(data: any): Observable<any>;
  abstract resetPassword(data: any): Observable<any>;
}
