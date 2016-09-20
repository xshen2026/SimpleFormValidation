var app = angular.module('FormValidation', ['vsGoogleAutocomplete']);

app.controller('FormController',['$scope',function($scope) {
	/*$scope.FirstName = 'World';*/
	$scope.states=[
		"Alabama","Alaska","Arizona","Arkansas", 
		"California","Colorado", "Connecticut", 
		"Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa", 
		"Kansas","Kentucky","Louisiana","Maine", "Maryland", "Massachusetts","Michigan", "Minnesota", "Mississippi", 
		"Missouri","Montana",
		"Nebraska","Nevada", "New Hampshire", "New Jersey","New Mexico","New York","North Carolina","North Dakota", 
		"Ohio","Oklahoma","Oregon","Pennsylvania Rhode Island", 
		"South Carolina","South Dakota","Tennessee","Texas","Utah", 
		"Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
	];
	$scope.submitForm = function(isValid) {

		// check to make sure the form is completely valid
		if (isValid) { 
			alert('Your Information is submitted successfully');
		} else {
			alert('Not valid');
		}

	};
}]);

/*app.directive('checkZip', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function myValidation(value) {
                if (value.indexOf("e") > -1) {
                    mCtrl.$setValidity('charE', true);
                } else {
                    mCtrl.$setValidity('charE', false);
                }
                return value;
            }
        mCtrl.$parsers.push(myValidation);   
        }
    };
});*/

app.directive('checkZip', function() {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function(scope, elem, attr, ngModel) {
				ngModel.$validators.zipcode = function(val) {
					var regexp = /^\d{5}(?:[-\s]\d{4})?$/;
					if (val) {
						return regexp.test(val);
					} else {
						return true;
					}
				};
			}
		};
});

app.directive('checkPhone', function() {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function(scope, elem, attr, ngModel) {
				ngModel.$validators.zipcode = function(val) {
					var regexp = /^\d{10}$/;
					if (val) {
						return regexp.test(val);
					} else {
						return true;
					}
				};
			}
		};
});

app.directive('checkName', function() {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function(scope, elem, attr, ngModel) {
				ngModel.$validators.name = function(val) {
					var regexp = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
					if (val) {
						return regexp.test(val);
					} else {
						return true;
					}
				};
			}
		};
});

app.directive('checkUser', function() {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function(scope, elem, attr, ngModel) {
				ngModel.$validators.user = function(val) {
					var regexp = /(?=^.{3,20}$)^[a-zA-Z][a-zA-Z0-9]*[._-]?[a-zA-Z0-9]+$/;
					if (val) {
						return regexp.test(val);
					} else {
						return true;
					}
				};
			}
		};
});
app.directive('checkCity', function() {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function(scope, elem, attr, ngModel) {
				ngModel.$validators.city = function(val) {
					var regexp = /^[A-z]+$/;
					if (val) {
						return regexp.test(val);
					} else {
						return true;
					}
				};
			}
		};
});


