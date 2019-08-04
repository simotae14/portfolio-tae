import auth0 from 'auth0-js';

class Auth0 {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'simotae14.eu.auth0.com',
      clientID: '30yKfsGm3O9szUJKv0yynP416qV3Xs9d',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });
  }

  //method to handle the authentication
  handleAuthentication = () => {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        // if we are logged in with success
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
          console.log(error);
        }
      });
    });

  }

  setSession = () => {
    // Save tokens!!!!
  }

  login = () => {
    this.auth0.authorize();
  }
}

// create instance
const auth0Client = new Auth0();

export default auth0Client;