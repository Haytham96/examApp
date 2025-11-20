import { Injectable } from '@angular/core';
import { Adaptor } from '../interfacaes/adaptor';

@Injectable({
  providedIn: 'root',
})
export class AuthAPIadaptorService implements Adaptor {
  adapt(data: any) {
    return {
      message: data.message,
      token: data.token,
      email: data.user.email,
    };
  }
}
