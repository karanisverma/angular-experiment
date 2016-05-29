(function(){
var app = angular.module('mobile-app', [ ]);
app.controller('phoneAppController', ['$http', function($http) {
    var phoneApp = this;
    phoneApp.mobile="ya y iaskh dkjldjove bhiukadsfjk"; // pdata stands for phone data.
    // var test = "yada-yada-yadayada-yada";
    $http.get('http://suprabha.me/js/phonedata2.json').success(function(data) {
        phoneApp.mobile = data;  
        console.log("PHONE DATA =>>>> ",phoneApp.mobile);
    });
	
     //closing success data 
}]); //closing controller
})();