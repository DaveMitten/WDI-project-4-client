angular
  .module('project4')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('questionsIndex', {
    url: '/questions',
    templateUrl: '/js/views/questions/question.index.html',
    controller: 'QuestionsIndexCtrl as vm'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl as register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl as login'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl as usersIndex'
  })
  .state('questionsShow', {
    url: '/questions/:id',
    templateUrl: '/js/views/questions/question.show.html',
    controller: 'QuestionsShowCtrl as questionsShow'
  });


  $urlRouterProvider.otherwise('/');
}
