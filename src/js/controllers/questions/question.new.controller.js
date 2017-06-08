angular
  .module('project4')
  .controller('QuestionsNewCtrl', QuestionsNewCtrl);

QuestionsNewCtrl.$inject = ['API', '$state', 'Question', 'CurrentUserService'];
function QuestionsNewCtrl(API, $state, Question, CurrentUserService) {
  const vm  = this;

  vm.questionsCreate = questionsCreate;

  function questionsCreate(){
    console.log(vm.newQuestion);
    vm.newQuestion.user_id = CurrentUserService.currentUser.id;
    return Question
      .save(vm.newQuestion)
      .$promise
      .then(() => {
        $state.go('questionsIndex');
      });

  }
}
