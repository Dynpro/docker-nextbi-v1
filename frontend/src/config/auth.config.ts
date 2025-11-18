// import { ProtocolMode } from '@azure/msal-browser';

// export const msalConfig = {
//   auth: {
//     clientId: '5e301b7f-a5cd-4c6d-8534-5aae66b48203',
//     authority: 'https://login.microsoftonline.com/ac68bfba-51b3-481a-be04-41cbda36fdc9',
//     redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI,
//     postLogoutRedirectUri: process.env.NEXT_PUBLIC_LOGOUT_REDIRECT_URI,
//     navigateToLoginRequestUrl: true,
//     protocolMode: ProtocolMode.AAD
//   },
//   cache: {
//     cacheLocation: 'localStorage',
//     storeAuthStateInCookie: false,
//   },
//   system: {
//     allowRedirectInIframe: true,
//     loggerOptions: {
//       loggerCallback: (level: number, message: string, containsPii: boolean) => {
//         if (containsPii) return;
//         switch (level) {
//           case 0: console.error(message); break;
//           case 1: console.warn(message); break;
//           case 2: console.info(message); break;
//           case 3: console.debug(message); break;
//           default: console.log(message); break;
//         }
//       },
//       logLevel: 3, // Verbose logging during development
//     }
//   }
// };

// export const loginRequest = {
//   scopes: ['openid', 'profile', 'email', 'User.Read'],
// };

// // For silent token acquisition
// export const silentRequest = {
//   scopes: ['User.Read', 'openid', 'profile', 'email'],
// };

// export const graphConfig = {
//   graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
// };
import { ProtocolMode } from '@azure/msal-browser';

export const msalConfig = {
  auth: {
    clientId: '5e301b7f-a5cd-4c6d-8534-5aae66b48203',
    authority: 'https://login.microsoftonline.com/ac68bfba-51b3-481a-be04-41cbda36fdc9',
    redirectUri: 'https://35.174.81.186:3000/',          // ✅ hardcoded redirect
    postLogoutRedirectUri: 'https://35.174.81.186:3000/', // ✅ hardcoded logout redirect
    navigateToLoginRequestUrl: true,
    protocolMode: ProtocolMode.AAD
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    allowRedirectInIframe: true,
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) return;
        switch (level) {
          case 0: console.error(message); break;
          case 1: console.warn(message); break;
          case 2: console.info(message); break;
          case 3: console.debug(message); break;
          default: console.log(message); break;
        }
      },
      logLevel: 3,
    }
  }
};

export const loginRequest = {
  scopes: ['openid', 'profile', 'email', 'User.Read'],
};

export const silentRequest = {
  scopes: ['User.Read', 'openid', 'profile', 'email'],
};

export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
};
