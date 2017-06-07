angular
  .module('project4')
  .directive('comment', comment);

comment.$inject = [];
function comment() {
  const directive = {};

  directive.restrict = 'E';
  directive.replace  = true;
  directive.templateUrl = '/js/views/templates/comment.template.html';
  directive.scope = {
    data: '='
  };

  return directive;
}
