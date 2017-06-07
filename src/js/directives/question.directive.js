angular
  .module('project4')
  .directive('question', question);

question.$inject = [];
function question() {
  const directive = {};

  directive.restrict = 'E';
  directive.replace  = true;
  directive.templateUrl = '/js/views/templates/question.template.html';
  directive.scope = {
    data: '='
  };

  return directive;
}
