;(function (moduleName) {
	angular
	.module(moduleName)
	.component('login', {
		templateUrl : 'app/features/authentication/login/login-component.html',
		controller : ['authFactory', loginCtrl],
		controllerAs : 'ctrl'
	});

	function loginCtrl (authFactory) {
		var vm = this;

		vm.authenticated = false;
		vm.user = {username : 'dk', password : ''};

		vm.doLogin = doLogin;

		function doLogin (user) {
			vm.authenticating = true;
			authFactory
			.makeLogin(user)
			.then(function (resp) {
				vm.message = resp.message;
				vm.authenticating = false;
			});
		}
	}
}("auth"));