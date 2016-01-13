angular.module('project', ['ngRoute']);

angular.module('project').config(function($routeProvider){

	$routeProvider
	.when('/', {
		templateUrl: 'templates/home.html'
	})
	.when('/who-we-are', {
        templateUrl: 'templates/who.html'
    })
    .when('/products', {
        templateUrl: 'templates/products.html'
    })
    .when('/contacts', {
        templateUrl: 'templates/contacts.html'
    })
    .otherwise({
		redirectTo: '/'
	});
});

angular.module('project').service('homeService',
	function(){

		this.getMinutes = function (){
			var currentDate = new Date();
			return currentDate.getSeconds();
		};

		this.getContext = function () {
			return 'Horas';
		};
	}
);

angular.module('project').controller('homeController',
	function($scope, $interval, homeService) {
		$scope.title = homeService.getMinutes();

		$interval(function(){
			$scope.title = homeService.getMinutes();			
		}, 1000);

		$scope.context = homeService.getContext();
	}
);


angular.module('project').controller('menuController', 
	function($scope){
		$scope.items = [
			{
				id: 'home',
				name: 'Home',
				link: '#/'
			},
			{
				id: 'who-we-are',
				name: 'Quem Somos',
				link: '#/who-we-are'
			},
			{
				id: 'products',
				name: 'Produtos',
				link: '#/products'
			},
			{
				id: 'contacts',
				name: 'Contactos',
				link: '#/contacts'
			}
		];
	}
);













