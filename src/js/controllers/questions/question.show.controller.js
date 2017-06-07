angular
  .module('project4')
  .controller('QuestionsShowCtrl', QuestionsShowCtrl);

QuestionsShowCtrl.$inject =
  ['API', '$stateParams', 'Question', '$http', 'User'];

function QuestionsShowCtrl(API, $stateParams, Question, $http, User) {
  const vm = this;
  console.log($stateParams.id);
  $http({
    method: 'GET',
    url: `${API}/questions/${$stateParams.id}`
  }).then(function successCallback(response) {
    console.log(response.data);
    vm.question = response.data;
    vm.question.comments.forEach(comment => {
      comment.user = User.get({id: comment.user_id});
    });
  });
}
