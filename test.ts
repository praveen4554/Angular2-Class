// data types

var count:Number;
var usename:String;
var agree:Boolean;
var users:Array<String>;
var userName:[String,Number];
count=123;
userName=["123",23];

enum Color {Red,Black,Blue};

function Vehicle(){
	Color.Black;
}
function create(firstName:String){

}
class createData{
  message:String;
	constructor(mes:String){
		this.message=mes;
	}
}

class createTuple extends createData{
	mess:String;
	constructor(mess:String){
		super('123');
	}
}

var data=new createTuple('praveen');

