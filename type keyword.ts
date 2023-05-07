//type keyword is used to define my own data type

type user={
    name:string;
    readonly age:number;  //it makes it as the keyword suggest
    pass?:boolean;      //here i make pass as optional  
}


const john:user={
    name:"john",
    age:30,      //because pass is optional
}

function func3( temp:user ){
    console.log();
}

func3(john);

type date={
    mydate:string;
}


type three=date & user;     //inheritance of types
type four=date  | user      


//In TypeScript, the syntax Record<string, any> is a type declaration that represents an object where the keys are strings and the values can be of any type.
const myObject: Record<string, any> = {
    name: "John Doe",
    age: 25,
    isStudent: true,
    favoriteColor: ["blue", "green"],
  };
  
  console.log(myObject.name);  // "John Doe"
  console.log(myObject.age);   // 25
  console.log(myObject.isStudent); // true
  console.log(myObject.favoriteColor); // ["blue", "green"]