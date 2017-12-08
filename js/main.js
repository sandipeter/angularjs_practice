//main module
var mainModule = angular.module("mainModule", []);

mainModule.controller("testCtrl", ["$scope", "$http", function($scope, $http){
    
    //init yourName variable.
    $scope.yourName = "Jack";
    
    //Generate Greeting
    $scope.greeting = function(){
        return "Jófej vagy " + $scope.yourName + "!";
    }
    
    //Watch yourName Variable
    $scope.$watch("yourName",function(n, o){
        if (n.indexOf("Brad")!==-1){
            $scope.note = "jó fej";
        };
    });
    
    //Hande user click
    
    $scope.clickHandler = function(){
      $scope.myNote = "Ez neked szól:" + $scope.yourName;  
    };
    
}]);


// Form Controller
mainModule.controller("formCtr", ["$scope", function($scope){
    
    // User. object
    $scope.user={};
    
    $scope.egyenleg = 1000;
    
    // Watch user object
    
    $scope.$watchCollection("user", function(n,o){
       console.log (n,o);                     
    })
    
    
}])