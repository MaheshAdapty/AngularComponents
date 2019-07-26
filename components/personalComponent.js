

angular.module("myApp") // extending an existing module
.component("personalComponent", {
	
	bindings: {
		studentId: "=",
		academicData: "="
	},

	templateUrl: "templates/personalTemplate.html",
	
	controller: ["myServicePersonal", function (myServicePersonal) {
		
		var self = this;
		myServicePersonal.getData().then(function (response) {
			self.studentPersonalData = response.studentPersonal;

			self.studentInformation = [];

			for( var x of self.studentPersonalData){
					for(var x1 of self.academicData){
						if(x.id == x1.id)
						{
							x["mark"] = x1.mark;
							x["grade"] = x1.grade;
							self.studentInformation.push(x);
							console.log(self.studentInformation);
						
						}
					}
					
			   }
		});

	
	
	}],
	
	controllerAs: "personalCtrl"

});