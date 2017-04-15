;(function (moduleName) {
	angular
	.module(moduleName)
	.factory('authFactory', ['$q', authFactory]);

	function authFactory ($q) {
		var obj = {
			makeLogin : makeLogin
		};

		function makeLogin (user) {
			var deferred = $q.defer(),
				SUCCESS_MESSAGE = "You have logged in successfully",
				ERROR_MESSAGE = "Your username or password is wrong";

			setTimeout(function () {
				if (user.username === user.password) {
					deferred.resolve({message : SUCCESS_MESSAGE});
				} else {
					deferred.resolve({message : ERROR_MESSAGE});
				}
			}, 1000);

			return deferred.promise;
		}

		return obj;
	}
}("auth"));