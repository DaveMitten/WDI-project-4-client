angular
.module('project4')
.controller('CommentsShowCtrl', CommentsShowCtrl);

CommentsShowCtrl.$inject =
['API', '$stateParams', 'Comment', '$http'];

function CommentsShowCtrl(API, $stateParams, Comment, $http) {
  const vm = this;
  console.log($stateParams.id);
  $http({
    method: 'GET',
    url: `${API}/comments/${$stateParams.id}`
  }).then(function successCallback(response) {
    console.log(response.data);
    vm.comment = response.data;
  });
}
