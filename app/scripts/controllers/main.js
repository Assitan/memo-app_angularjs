'use strict';

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/memo_save', {
      templateUrl: 'scripts/controllers/memo.json', 
      controller: 'MainCtrl'
    })
    .otherwise({redirectTo: '/'});

}]).controller('MainCtrl', function($scope,$http) {//récup du $scope
 
  	var memos = [];//ensemble des mémos  
    var memoContent = '';
    var year = new Date();

    $scope.addMemo = function(){
      var self = this;
      $scope.memos = memos;//rattachement à la vue
    	var value = $scope.memo;
      memos.push({title:value});

      var publication = {};
      self.publication = new Date()
      $scope.publication = self.publication;
      console.log($scope.publication);
      //$scope.publication = self.date;     
  	};

  	//Suppr. d'un mémo
  	$scope.removeMemo = function(index){		
  		memos.splice(index,1);
  	};

 });
