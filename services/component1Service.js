angular.module("myApp") 
.service('myServicePersonal', function ($http) {

    function getData (){
  return $http.get("json/studentPersonal.json").then(function(response){
      
        return response.data;
       });
       
   }; 
   return{
      getData : getData
   }
 });
  