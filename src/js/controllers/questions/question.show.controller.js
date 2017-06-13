angular
.module('project4')
.controller('QuestionsShowCtrl', QuestionsShowCtrl);

QuestionsShowCtrl.$inject =
['$stateParams', 'Question', 'User', 'Comment', '$state'];

function QuestionsShowCtrl($stateParams, Question, User, Comment, $state) {
  const vm = this;
  getQuestion();

  vm.newComment = {
    question_id: $stateParams.id
  };

  vm.commentsCreate = commentsCreate;

  function commentsCreate(){
    return Comment
    .save(vm.newComment)
    .$promise
    .then(() => {
      vm.newComment = {
        question_id: $stateParams.id
      };
      getQuestion();
    });
  }

  vm.questionsDelete = function(id) {
    console.log(id);
    console.log($stateParams.id);
    Question.delete({id: $stateParams.id})
    .$promise
    .then(() => {
      $state.go('questionsIndex');
      $state.reload();
    }
  );
  };

  vm.commentsDelete = function(id) {
    console.log(id);
    console.log($stateParams.id);
    Comment.delete({id: id})
    .$promise
    .then(window.location.reload());
  };

  function getQuestion() {
    vm.question = Question.get({ id: $stateParams.id });
  }
}
