angular
.module('project4')
.service('TokenService', TokenService);

TokenService.$inject = ['$window'];
function TokenService($window) {
  const self = this;

  self.setToken = (token) => {
    return $window.localStorage.setItem('auth-token', token);
  };
}
