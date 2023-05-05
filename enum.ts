enum state{
    running=67,
    stopped,
    terminate
};
//enum consist integral constants
//but if you assign string to someone , then you have to assign everyone to string or number
enum state2{
    running=67,
    stopped="Dfdf",
    terminate=4.45
};

let d=state.running;
console.log(d);