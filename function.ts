function add(one:number, two:any){
    return one+two;
}

let c=add(5,"str")
console.log(c);

var func=(num:number):void|number=>{       //important
    console.log(num);
}
var func2=(num:number):number[]=>{
    return [num*3];
}

//using never makes it clear that the function will never complete normally and can help prevent errors in your code.
function handleerror(err:string):never{
    throw new Error(err);
}


