import {
  AuthServiceConfig,
  GoogleLoginProvider,
} from 'angular5-social-login';

const GOOGLE_CLIENT_ID = '361433919177-bebadf2oaq6l18n04ap2cn0imkqt1m78.apps.googleusercontent.com';

export function GET_AUTHORIZATION_SERVICE_CONFIG(): AuthServiceConfig {
 return new AuthServiceConfig([{
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(GOOGLE_CLIENT_ID)
    }]
  );
}
