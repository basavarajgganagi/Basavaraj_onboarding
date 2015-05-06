
var totalUsers =100;
var sameCityUser =5; 
var totalBranches;
var sameCityBranch=2;
var totalCities=totalUsers/sameCityUser;
var totalBranches=sameCityBranch*totalCities;
var cityArray=[];
var users;
cityArray=createCities(10);
createBranches(cityArray,2);
createUsers(cityArray,totalUsers);
console.log(cityArray[0].branches[0]);

function createCities(totalCities){
	var randomCity;
	var cities=[];
	for(var i=0;i<totalCities;i++){
	randomCity= "city"+Math.floor(Math.random()*Math.pow(10,(totalCities.toString().length)+2));
    cities.push({CityID:randomCity,branches:[]});
	}
	return cities;
}

function createBranches(cityArr,sameCityBranch){
	var randomBranch;
	var branches;
	for(var j=0;j<cityArr.length;j++){
		for(var k=0;k<sameCityBranch;k++){
			randomBranch="branch"+cityArr[j].CityID+k;	
			cityArr[j].branches.push({BranchID: randomBranch,users:[]});
		}
		
	}
	
}

function createUsers(cityArr,totalUsers){
	var randomUser;	
	var getStreet;
	var getlandmark;
	var myage;
	var mydob=[];
	for(var m=0;m<cityArr.length;m++){
		users=[];
		var usersinbranch=[];
				var dateOb;
		   		for(var q=0;q<sameCityUser;q++){
		    	getStreet="line"+cityArr[m].CityID+q;
				getlandmark ="line"+cityArr[m].CityID+q+1;
				randomUser="user"+cityArr[m].CityID+m+q;
			    mydob=getDate();
			    
			    presentDate=getPresentDate();
			    myage=presentDate.y-(mydob.y); 
				var mystatus;
				if(myage>30){
					mystatus="old user";
				}
				else{
				mystatus="young user";
				}
			    var user={UserID: randomUser,dob:mydob,street: getStreet,landmark: getlandmark,age: myage,status:mystatus};
			    	var branchtocity=cityArr[m].branches[q%sameCityBranch];
			    	branchtocity.users.push(user); 				
				}
						
	}

}

function getDate(){
	var dateObj = new Date(); //creating new date object
	var month = Math.abs(dateObj.getUTCMonth() + 1+Math.floor((Math.random()*30)-20)); // random months from 1-12
	var day = dateObj.getUTCDate()+Math.floor((Math.random()*30)-20); //random day from 1 -30/31
	var year = dateObj.getUTCFullYear()+Math.floor((Math.random()*30) -45); //random year from 1970 to 2015
	var dateObj11={
		d:day,
		m:month,
		y:year
	}
	return dateObj11;
}

function getPresentDate(){
	var dateObj = new Date(); //creating new date object
	var month = dateObj.getUTCMonth(); // random months from 1-12
	var day = dateObj.getUTCDate(); //random day from 1 -30/31
	var year = dateObj.getUTCFullYear(); //random year from 1970 to 2015
	var dateObj12={
		d:day,
		m:month,
		y:year
	}
	return dateObj12;
}

// for(var c=0;c<cityArray.length;c++){
// 	createCities(10);
// 	console.log(cityArray[c].CityID);
// 	for(var b=0;b<sameCityBranch;b++){
// 		createBranches(cityArray,2);
// 		console.log("    "+cityArray);
// 		for(var a=0;a<sameCityUser;a++){
// 			createUsers(cityArray,totalUsers);
// 			console.log("      "+cityArray.users);}
// 			}

// }




	
 //console.log(userswith30years);
// function citytobranch(cityArr){
// 	//looping through the users2 array
// 	for(var u = 0; u < cityArr.length; u++){
// 		//function to assign branch city to the user city
// 		var branchesWithSameCity = cityArr.filter(function(branch){
// 			return branch.city === cityArr[u].city;
// 		})
// 		//looping through the branchesWithSameCity to check for the user has been assigned to previous branch 
// 		for(var b = 0; b < branchesWithSameCity.length; b++){
// 			//checking for which branch the last user is assigned 
// 			if(u !== 0)
// 			{
// 				var lastUser = cityArr[u-1];
// 				//checking the last user was assigned for which branch
// 	   			if(lastUser.branchid !== branchesWithSameCity[b].branchid)
// 	   			{            
// 	   				cityArr[u].branchid = branchesWithSameCity[b].branchid;//if is not on same branch assign it to next branch in the same city
// 	   				break;

// 				}
// 			}
// 			else
// 			{
// 				//if he is not assigned the same branch than assign him that branch
// 				cityArr[u].branch = branchesWithSameCity[b].branchid;
// 				break;
// 			}


// 		}


// 	}
// }
// function getBranchId(cityArr){



// 	var BranchID;
// 	var branchid;
// 	for(var n=0;n<cityArr[n].CityID;n++){
		
		
// 			getId=citytobranch();
// 			branchids.push({BranchID: getId});
// 			cityArr[n].users.branchid=branchid;
// 		//	console.log(cityArr[n].users);

// 	}

// }
// // // //declaration of arrays
// // var users=[];
// // var branchs=[];
// // var users2 = [];
// // var branchs2 =[];
// // var city=[];

// //declaration of variables

// var name;
// var z;
// var y;



// //function to calculate the age of the user using the dob of the user
//  function getAge(year,month,day){
// var dateObj = new Date(); //creating new date object
// var months =month // random months from 1-12
// var days = day//random day from 1 -30/31
// var years = year //random year from 1970 to 2015

// //creating new date object
// var dateObj1 = new Date();

// var month1 = dateObj1.getUTCMonth() +1 ; //cal
// var day1 = dateObj1.getUTCDate();
// var year1 = dateObj1.getUTCFullYear(); 

// var agemonth= Math.abs(month1-month);
// var ageday=Math.abs(day1-day);
// var ageyear=Math.abs(year1-year);
// return ageyear+" years  "+agemonth+" months  "+ageday+" days  ";
// }

// // users = createUser(totalUsers, sameCityCount);

// // // createBranch();
// // // citytobranch();

// // // for(var n=0; n<users2.length; n++){
// // // 	getUsers(users2[n]);

// // // 	city[n]=branchs2.name;//assinging the branches for each city
// // // 	var cityn=users2[n].address.city;//assinging city to city object
// // // 	var cityb=getBranchs();//assinging branchid to city
// // // 	var cityb1=getBranchs();
// // // 	var cityb2=getBranchs();
// // // 	var cityun=getUsers();// assinging user name to city and branchid
// // // 	var cityun1=getUsers();
// // // 	var cityun2=getUsers();
// // // 	//creating city object
// // // 	var cityobject={
// // // 		cityname: cityn,
// // // 		citybranch:{ city: cityb, city1: cityb1,city2: cityb2},
// // // 		cityusername: {user: cityun,user1: cityun1,user2: cityun2}
// // // 	}	
// // // 	console.log(cityobject);// printing the objects
// // // }

// function getUsers(user){
// 		var abranch;

// 		if(user.branchid==="b1")
// 		{
// 			abranch= user.name;
// 		}
// 		else if(user.branchid==="b2")
// 		{
// 			abranch= user.name;
// 		}
// 		else if(user.branchid==="b3")
// 		{
// 			abranch =user.name;
// 		}
// 		else if(user.branchid==="b4")
// 		{	
// 			abranch =user.name;
// 		}
// 		else if(user.branchid==="b5")
// 		{
// 			abranch =user.name;
// 		}
// 		else if(user.branchid==="b6")
// 		{
// 			abranch =user.name;
// 		}
// 		else if(user.branchid==="b7")
// 		{
// 			abranch =user.name;
// 		}
// 		else
// 		{
// 			abranch =user.name;
// 		}

// 		return abranch;
// 	}

// function getBranchs(){
// 	var acity;
// 	if(users2[n].address.city ==="c1") {
// 		acity= users2[n].branchid;
// 	}
// 	else if(users2[n].address.city==="c2")
// 	{
// 		acity=users2[n].branchid;
// 	}
// 	else if(users2[n].address.city==="c3")
// 	{
// 		acity =users2[n].branchid;
// 	}
// 	else
// 	{
// 		acity= users2[n].branchid;
// 	}
// 	return acity;
// }

// // function getUsers(){
// // 	var abranch;
// // 	for(var x=0;x<users2.length;x++){
// // 	if(users2[x].branchid==="b1")
// // 	{
// // 		abranch= users2[x].name;
// // 	}
// // 	else if(users2[x].branchid==="b2")
// // 	{
// // 		abranch= users2[x].name;
// // 	}
// // 	else if(users2[x].branchid==="b3")
// // 	{
// // 		abranch =users2[x].name;
// // 	}
// // 	else if(users2[x].branchid==="b4")
// // 	{	
// // 		abranch =users2[x].name;
// // 	}
// // 	else if(users2[x].branchid==="b5")
// // 	{
// // 		abranch =users2[x].name;
// // 	}
// // 	else if(users2[x].branchid==="b6")
// // 	{
// // 		abranch =users2[x].name;
// // 	}
// // 	else if(users2[x].branchid==="b7")
// // 	{
// // 		abranch =users2[x].name;
// // 	}
// // 	else
// // 	{
// // 		abranch =users2[x].name;
// // 	}
// // 	}
// // 	return abranch;
// // }


//function to get random date object in the form of dd mm yy





// // function to create array of objects of branchs 
// function createBranch(){
// 	//creating 8 branchs
// 	for(var h=0;h<8;h++){
// 	//assigning city to respective to branchs
// 		if(h<2)
// 		{  y=1;
			
// 		}
// 		else if(h<4){
			
// 			y=2;
// 		}
// 		else if(h<6){
			
// 			y=3;
// 		}
// 		else if(h<8){
			
// 			y=4;
// 		}


// 		//declaration of variables
// 			var branch_name="Branchname"+h;
// 		    var branch_id ="BranchID"+h;
// 			var branchstreetvalue="line"+h;
// 		    var branchlandmarkvalue="line"+h+1;
// 		    var cityvalue="city"+y;




// 		//creating objects of branch
// 			var branch =
// 			{
// 			//assigning the value for each property
// 				 name: branch_name,
// 				 branchid: branch_id,
// 			     address: {
// 			     street: branchstreetvalue,
// 			     landmark: branchlandmarkvalue,
// 			     city: cityvalue
// 			    }

// 			}
// 		//assigning city for each branch
// 		city[n]=branchs2.name;	

// 		//pushing each object to the array
// 		branchs2.push(branch);
			
// 		}

// }

// // function to create array of objects of users 
// function createUser(totalCities,sameCityCount){
// 	//creating 20 users
// 	for(var j=0;j<totalCities;j++){
// 		for (var i = 0; i < sa.length; i++) {
// 			sa[i]
// 		};

// 	//assigning city to each user
// 	if(j<5){
// 	  z=1;	
// 	}
// 	else if(j<10){
// 		z=2;
// 	}
// 	else if(j<15){
// 		z=3;
// 	}
// 	else if(j<20){
// 		z=4;
// 	}

// 	//declaring	and assigning the values respectively
// 	    var namevalue="name"+j;// calulating unique name for each user
// 		var streetvalue="line"+j;// calulating unique street for each user
// 	    var landmarkvalue="line"+j+1;// calulating unique land mark for each user
// 	    var cityvalue="city"+z;// calulating city for each user
// 	    var currentBranchID;//calculating branch id for the user

//     //calculating the age using the moment.js
// 	    var date=getDate(); // declaring the date object
// 		var temp =moment([date.y,date.m]);// using moment function to access the user dob 
// 		var d =moment().format();// accessing current date
// 		var agevalue=temp.diff(d,'years');// calulating the difference of the current age and dob of the user
// 		agefinal=Math.abs(agevalue);//taking absolute value as age cannot be negative
		

	

// 	//creating objects of users	
// 			var user =
// 			{

// 				 name: namevalue,
// 			     dob: date,
// 			     branchid: currentBranchID,
// 			     age: agefinal,
// 			     address: {
// 			     street: streetvalue,
// 			     landmark: landmarkvalue,
// 			     city: cityvalue
// 			    }

// 			}


		
// 	users2.push(user);



// 	}

// }
// function to assign city to each branch and assign branch to each user
// function citytobranch(){
// 	users2[0].branchid=branchs2[0].branchid;//assinging branchid for each user
// 	//looping through the users2 array
// 	for(var u = 0; u < users2.length; u++){
// 		//function to assign branch city to the user city
// 		var branchesWithSameCity = branchs2.filter(function(branch){
// 			return branch.address.city === users2[u].address.city;
// 		})
// 		//looping through the branchesWithSameCity to check for the user has been assigned to previous branch 
// 		for(var b = 0; b < branchesWithSameCity.length; b++){
// 			//checking for which branch the last user is assigned 
// 			if(u !== 0)
// 			{
// 				var lastUser = users2[u-1];
// 				//checking the last user was assigned for which branch
// 	   			if(lastUser.branchid !== branchesWithSameCity[b].branchid)
// 	   			{            
// 	   				users2[u].branchid = branchesWithSameCity[b].branchid;//if is not on same branch assign it to next branch in the same city
// 	   				break;

// 				}
// 			}
// 			else
// 			{
// 				//if he is not assigned the same branch than assign him that branch
// 				users2[u].branch = branchesWithSameCity[b].branchid;
// 				break;
// 			}


// 		}


// 	}
// }
