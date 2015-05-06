function Artoo(myname,myemp,mywork){
	this.name= myname;
	this.emp=myemp;

	if(myemp==='geek'){
		var Obj =new Geeks(mywork);
		
	}
	else if(myemp==='rainmaker'){
		var Obj = new Rainmakers(mywork);
		
	}
	else{
		var Obj = new Firefighters(mywork);
		
	}
	Obj.print();

}
Artoo.prototype.print=function(){
	console.log(this.name+" is a "+this.emp+" at Artoo");
}
function Geeks(mytech) {
	this.tech=mytech;
}
Geeks.prototype.print=function(){
	console.log("Works on "+this.tech);
}
function Rainmakers(mybuz) {
	this.buz=mybuz;
}
Rainmakers.prototype.print=function(){
	console.log("Works on "+this.buz);
}
function Firefighters(mysupport) {
	this.support=mysupport;
}
Firefighters.prototype.print=function(){
	console.log("support for "+this.support);
}
var nameObj	= new Artoo("Basavaraj",'geek','android');


nameObj.print();


var nameObj1 =new Artoo('Akhila','rainmaker','finance');
nameObj1.print();