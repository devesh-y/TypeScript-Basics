interface inter{
    email:string,
    readonly userid:number,
    func: ()=>string,   //way 1 for function
    func2():number,       //way 2 for function
    func3(name:string):boolean
}

let user1:inter={
    email:"hello@gmail.com",
    userid:45,
    func: ()=>{
        return "";
    },
    func2: ()=>{
        return 45;
    },
    func3:(myname) =>{
        return true;
    }
}

interface inter2 extends inter{  
    role:string
}
console.log(user1);

