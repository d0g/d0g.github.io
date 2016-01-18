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

angular.module('project').service('menuService', 
	function() {
		this.getMenuItems = function() {
			return [
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
	}
)

angular.module('project').controller('menuController', 
	function($scope, menuService){
		$scope.items = menuService.getMenuItems();
	}
);













