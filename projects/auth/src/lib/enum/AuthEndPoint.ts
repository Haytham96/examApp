export class AuthEndPoint {
  static readonly REGISTER = 'https://exam.elevateegy.com/api/v1/auth/signup';
  static readonly LOGIN = 'https://exam.elevateegy.com/api/v1/auth/signin';
  static readonly CHANGEPASSWORD =
    'https://exam.elevateegy.com/api/v1/auth/changePassword';
  static readonly DELETEMYACCOUNT =
    'https://exam.elevateegy.com/api/v1/auth/deleteMe';
  static readonly EDITPROFILE =
    'https://exam.elevateegy.com/api/v1/auth/editProfile';
  static readonly LOGOUT = 'https://exam.elevateegy.com/api/v1/auth/logout';

  static readonly LOGGEDUSERINFO =
    'https://exam.elevateegy.com/api/v1/auth/profileData';

  static readonly FORGOTPASSWORD =
    'https://exam.elevateegy.com/api/v1/auth/forgotPassword';

  static readonly VERIFYPASSWORD =
    'https://exam.elevateegy.com/api/v1/auth/verifyResetCode';

  static readonly RESETPASSWORD =
    'https://exam.elevateegy.com/api/v1/auth/resetPassword';
}
