app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider
.state('home', {
      url: '/home',
      views: {
        '': {
          templateUrl: 'view/home.html',
          controller:'ctrl'
          /*controller:'ctrl', */


        },
        'about@home': {
          templateUrl: 'view/about.html'
        },
        'work@home': {
          templateUrl: 'view/services.html'
        },
        'contact@home': {
          templateUrl: 'view/contact.html'
        }
      }
    })
});