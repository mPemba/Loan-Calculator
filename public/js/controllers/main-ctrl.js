var app = angular.module('LoanCalculator');

app.controller('mainCtrl', function($scope, bankService) {
	bankService.getData().then(function(res) {
		console.log(res);
		$scope.interest_rate = Number(res.data);
	})
})