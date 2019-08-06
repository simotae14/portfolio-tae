import auth0 from 'auth0-js';
import Cookies from 'js-cookie';

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

  // to save the tokens in the cookies
  setSession = (authResult) => {
    debugger;
    const expiresIn = JSON.stringify((authResult.expiresIn + 1000) + new Date().getTime());

    Cookies.set('user', authResult.idTokenPayload);
    Cookies.set('jwt', authResult.idToken);
    Cookies.set('expiresIn', expiresIn);
  }

  // logout removes cookies
  logout = () => {
    Cookies.remove('user');
    Cookies.remove('jwt');
    Cookies.remove('expiresIn');

    //and logout
    this.auth0.logout({
      returnTo: '',
      clientID: '30yKfsGm3O9szUJKv0yynP416qV3Xs9d'
    });
  } 

  login = () => {
    this.auth0.authorize();
  }

  // check if the user is authenticated
  isAuthenticated = () => {
    // if the expires time is not already happened
    const expiresIn = Cookies.getJSON('expiresIn');
    return new Date().getTime() < expiresIn;
  }
}

// create instance
const auth0Client = new Auth0();

export default auth0Client;