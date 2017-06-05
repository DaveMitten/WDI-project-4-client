angular
  .module('project4')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['User'];
function UsersIndexCtrl(User){
  const vm = this;
  vm.users = User.query();
}
