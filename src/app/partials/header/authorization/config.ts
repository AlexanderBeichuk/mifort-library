import {
  AuthServiceConfig,
  GoogleLoginProvider,
} from 'angular5-social-login';

const GOOGLE_CLIENT_ID = '746088326666-blhd9m4ktcv8tspvcsags05bicme6q1c.apps.googleusercontent.com';

export function GET_AUTHORIZATION_SERVICE_CONFIG(): AuthServiceConfig {
 return new AuthServiceConfig([{
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(GOOGLE_CLIENT_ID)
    }]
  );
}
