//type keyword is used to define my own data type

type user={
    name:string;
    readonly age:number;  //it makes it as the keyword suggest
    pass:boolean;        
}


const john:user={
    name:"john",
    age:30,
    pass:true
}

function func3( temp:user ){
    console.log();
}

func3(john);

type date={
    mydate:string;
}


type three=date & user;     //inheritance of types



