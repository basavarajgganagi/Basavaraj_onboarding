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
function Geeks(myname,mywork) {
	Artoo.call(this,myname);
	this.tech="geek";
	this.name=myname;
	this.work=mywork;
}
Geeks.prototype=Object.create(Artoo.prototype,{
myname:{}
	console.log("Works on "+this.work);
}
});
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
var nameObj	= new Geeks("Basavaraj",'rainmaker','android');


nameObj.print();


