angular.module("myApp") 
.service('myServiceAcademic', function ($http) {

    function getData (){
  return $http.get("json/studentAcademic.json").then(function(response){
     
        return response.data;
       });
       
   }; 
   return{
      getData : getData
   }
 });
  