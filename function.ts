function add(one:number, two:any){
    return one+two
}

var c=add(5,"str")
console.log(c);

var func=(num:number):void=>{
    console.log(num);
}
var func2=(num:number):number=>{
    return num*3;
}

//using never makes it clear that the function will never complete normally and can help prevent errors in your code.
function handleerror(err:string):never{
    throw new Error(err);
}