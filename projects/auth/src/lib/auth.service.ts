import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthAPI } from './base/AuthAPI';
import { HttpClient } from '@angular/common/http';
import { AuthEndPoint } from './enum/AuthEndPoint';
import { AuthAPIadaptorService } from './adaptor/auth_api.adaptor';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthAPI {
  _httpClient = inject(HttpClient);
  _authAPIadaptorService = inject(AuthAPIadaptorService);

  login(data: any): Observable<any> {
    return this._httpClient.post(AuthEndPoint.LOGIN, data).pipe(
      map((res) => this._authAPIadaptorService.adapt(res)),
      catchError((err) => of(err))
    );
  }

  register(data: any): Observable<any> {
    return this._httpClient.post(AuthEndPoint.REGISTER, data).pipe(
      map((res) => this._authAPIadaptorService.adapt(res)),
      catchError((err) => of(err))
    );
  }

  changePassword(data: any): Observable<any> {
    return this._httpClient.patch(AuthEndPoint.CHANGEPASSWORD, data).pipe(
      map((res) => this._authAPIadaptorService.adapt(res)),
      catchError((err) => of(err))
    );
  }

  deleteAccount(): Observable<any> {
    return this._httpClient.delete(AuthEndPoint.DELETEMYACCOUNT).pipe(
      map((res) => res),
      catchError((err) => of(err))
    );
  }
  editProfile(data: any): Observable<any> {
    return this._httpClient.put(AuthEndPoint.EDITPROFILE, data).pipe(
      map((res) => this._authAPIadaptorService.adapt(res)),
      catchError((err) => of(err))
    );
  }

  logout(): Observable<any> {
    return this._httpClient.get(AuthEndPoint.LOGOUT, {}).pipe(
      map((res) => res),
      catchError((err) => of(err))
    );
  }

  loggedUserInfo(): Observable<any> {
    return this._httpClient.get(AuthEndPoint.LOGGEDUSERINFO).pipe(
      map((res) => this._authAPIadaptorService.adapt(res)),
      catchError((err) => of(err))
    );
  }

  forgotPassword(data: any): Observable<any> {
    return this._httpClient.post(AuthEndPoint.FORGOTPASSWORD, data).pipe(
      map((res) => this._authAPIadaptorService.adapt(res)),
      catchError((err) => of(err))
    );
  }

  verifyResetCode(data: any): Observable<any> {
    return this._httpClient.post(AuthEndPoint.VERIFYPASSWORD, data).pipe(
      map((res) => this._authAPIadaptorService.adapt(res)),
      catchError((err) => of(err))
    );
  }

  resetPassword(data: any): Observable<any> {
    return this._httpClient.put(AuthEndPoint.RESETPASSWORD, data).pipe(
      map((res) => this._authAPIadaptorService.adapt(res)),
      catchError((err) => of(err))
    );
  }
}
