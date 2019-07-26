
angular.module("myApp") 
.component("academicComponent", {
	bindings: {
		studentId: "=",
		personalData: "="
		 // Two Way Binding (for variable)
	},
	templateUrl: "templates/academicTemplate.html",
	controller: ["myServiceAcademic", function (myServiceAcademic) {
		
		var self = this;
		myServiceAcademic.getData().then(function (response) {
			self.studentAcademicData = response.studentAcademic;
		});
	}],
	controllerAs: "academicCtrl"
});





