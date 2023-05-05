interface person{
    name:string,
    age:number
}

class employee implements person{
    name:string;
    age: number;
    private pass:boolean;
    protected salary:number;
    
    constructor(name:string, age:number,salary:number,pass:boolean){
        this.name=name;
        this.age=age;
        this.salary=salary;
        this.pass=pass;
    }
    func():number{
        return this.age;  
    }
    //get and set just provide a controlled manner
    //you can do this by normal methods also 
    get getpass():boolean{
        return this.pass;
    }
    set setpass(temp:boolean){
        this.pass=temp;
    }
    
}

//its a must to call super
//typescript classes can have one constructor only
class manager extends employee{
    role:string;
    constructor(name:string, age:number,salary:number,pass:boolean,role:string){
        super(name,age,salary,pass);
        this.role=role;
    }
    func(): number {
        return this.salary;
    }
}
let one=new employee("deve",34,33434,true);
console.log(one.func());
let two=new manager("deve",34,33434,true,"manager");
console.log(two.func());


abstract class polygon{
    private d:number=77;
    abstract print():void;   //makes the derived class to implement this
    getarea(){
        return this.d;
    }
}


class circle extends polygon{
    dd:number;
    constructor(d:number){
        super();
        this.dd=d;
        
    }
    print():void{
        console.log("in circle");
    }
}

class base{
    //no need to declare the data members here
    constructor(private length:string,protected radius:number){

    };
    //here the varibles will be asssigned accordingly according to the arguments
    
}