angular
  .module('project4')
  .controller('QuestionsShowCtrl', QuestionsShowCtrl);

QuestionsShowCtrl.$inject =
  ['$stateParams', 'Question', 'User', 'Comment'];

function QuestionsShowCtrl($stateParams, Question, User, Comment) {
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

  function getQuestion() {
    vm.question = Question.get({ id: $stateParams.id });
  }
}
