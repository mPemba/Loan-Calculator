var app = angular.module('LoanCalculator');

app.service('bankService', function($http, $q) {
  this.getData = function() {
  		return $http({
		method: 'GET',
		url: 'http://localhost:8666/interest_rate'
	  })
  }
  // return $http({
  // 	method: 'GET',
  // 	url: '/api/interest_rate'
  // }).then(function(res) {
  // 	  return res.data;
  // })
})