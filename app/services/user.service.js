// "use strict";
// angular.module('EventApp')
//   .fatory('UserFactory', ['$http', '$localstorage', function($http, $localstorage) {
//     var baseUrl = 'https://event-hub.herokuapp.com';
//     function changeUser(user) {
//       angular.extend(currentUser, user);
//     }
//     function urlBase64Decode(str) {
//       var output = str.replace('-', '+').replace('_', '/');
//       switch (output.length % 4) {
//         case 0:
//           break;
//         case 2:
//           output += '==';
//           break;
//         case 3:
//           output += '=';
//           break;
//         default:
//           throw 'Illegal base64url string!';
//       }
//       return window.atob(output);
//     }
//     function getUserFromToken() {
//       ver token = $localStorage.token;
//       var user = {};
//       if (typeof token != 'undefined') {
//         var encoded = token.split('.')[1];
//         user = JSON.parse(urlBase64Decode(encoded));
//       }
//       return user;
//     }

//     var currentUser = getUserFromToken();


//   }]);