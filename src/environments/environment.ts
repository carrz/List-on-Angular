// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
    // Initialize Firebase
  firebase: {
    apiKey: 'AIzaSyCcZ-P0r2EgugGeu6tTc7GSv_WWSZjV9uw',
    authDomain: 'mi-fabuloso-angular.firebaseapp.com',
    databaseURL: 'https://mi-fabuloso-angular.firebaseio.com',
    projectId: 'mi-fabuloso-angular',
    storageBucket: 'mi-fabuloso-angular.appspot.com',
    messagingSenderId: '559220004215'
  }
};
