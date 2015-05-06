var users = new Array();
var users2 = [];
var branchs2 =[];
var branchs = new Array();
var city=[];
var name=0;


var z;
var y;
//var getbraanchid =function(){

for(var h=0;h<8;h++){

if(h<2)
{  y=1;
	
}
else if(h<4){
	
	y=2;
}
else if(h<6){
	
	y=3;
}
else if(h<8){
	
	y=4;
}



	var branch_name="Branchname"+h;
    var branch_id ="BranchID"+h;

	var branchstreetvalue="line"+h;
    var branchlandmarkvalue="line"+h+1;
  
    var cityvalue="city"+y;




var branch =
{

	 name: branch_name,
	 branchid: branch_id,
     address: {
     street: branchstreetvalue,
     landmark: branchlandmarkvalue,
     city: cityvalue
    }

}


branchs2.push(branch);
	

}



for(var j=0;j<20;j++){


if(j<5)
{  z=1;
	
}
else if(j<10){
	
	z=2;
}
else if(j<15){
	
	z=3;
}
else if(j<20){
	
	z=4;
}


var namevalue="name"+j;

 
	var date=Math.floor((Math.random()*30) + 1970); 

	var streetvalue="line"+j;
    var landmarkvalue="line"+j+1;
  
    var cityvalue="city"+z;


var currentBranchID;

	
var user =
{

	 name: namevalue,
     dob: date,
     branchid: currentBranchID,
     address: {
     street: streetvalue,
     landmark: landmarkvalue,
     city: cityvalue
    }

}


var age =2015-user.dob;
if(age<=30){

// console.log(age+" "+user.name+" ");
}
users2.push(user);


}



users2[0].branchid=branchs2[0].branchid;

for(var u = 0; u < users2.length; u++){
	
	var userCity = users2[u].address.city;
	//console.log(userCity);
	var branchesWithSameCity = branchs2.filter(function(branch){

		return branch.address.city === userCity;
	})
	
	for(var b = 0; b < branchesWithSameCity.length; b++){
		var currentBranchID = branchesWithSameCity[b].branchid;
		if(u !== 0){
			var lastUser = users2[u-1];

   			if(lastUser.branchid !== currentBranchID){            //This is to check if a user is already assigned with a branch.
   				users2[u].branchid = currentBranchID;
   				break;

			}
		}
		else{
			users2[u].branch = currentBranchID;
			break;
		}


	}


}


for(var n=0; n<users2.length; n++){
	console.log(users2[n].name+" "+users2[n].branchid+" "+users2[n].address.city);
	var city =
{

	 city: branchs2[n].address.city
    
    

}

}


console.log(users2);



