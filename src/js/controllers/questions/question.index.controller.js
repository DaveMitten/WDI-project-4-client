angular
.module('project4')
.controller('QuestionsIndexCtrl', QuestionsIndexCtrl);

QuestionsIndexCtrl.$inject = ['API', 'Question'];
function QuestionsIndexCtrl(API, Question) {
  const vm = this;

  questionsIndex();

  function questionsIndex() {
    vm.questions = Question.query();
  }
}
