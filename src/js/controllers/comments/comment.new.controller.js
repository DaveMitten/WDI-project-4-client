angular
  .module('project4')
  .controller('CommentsNewCtrl', CommentsNewCtrl);

CommentsNewCtrl.$inject = ['API', '$state', 'Comment', 'CurrentUserService'];
function CommentsNewCtrl(API, $state, Comment, CurrentUserService) {
  const vm  = this;

  vm.commentsCreate = commentsCreate;

  function commentsCreate(){
    console.log(vm.newComment);
    vm.newComment.user_id = CurrentUserService.currentUser.id;
    return Comment
      .save(vm.newComment)
      .$promise
      .then(() => {
        $state.go('commentsIndex');
      });

  }
}
