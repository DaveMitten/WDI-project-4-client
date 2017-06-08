angular
  .module('project4')
  .controller('QuestionsNewCtrl', QuestionsNewCtrl);

QuestionsNewCtrl.$inject = ['API', '$state', 'Question'];
function QuestionsNewCtrl(API, $state, Question) {
  const vm  = this;

  vm.create = questionsCreate;

  function questionsCreate(){
    return Question
      .save(vm.newQuestion)
      .$promise
      .then(() => {
        $state.go('questionsNew');
      });
  }
}
