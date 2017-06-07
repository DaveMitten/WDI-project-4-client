angular
.module('project4')
.controller('CommentsIndexCtrl', CommentsIndexCtrl);

CommentsIndexCtrl.$inject = ['API', 'comment'];
function CommentsIndexCtrl(API, comment) {
  const vm = this;

  commentsIndex();

  function commentsIndex() {
    vm.comments = comment.query();
  }
}
