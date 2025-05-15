function sum(...args) {
   //simple way to do
    let sum1 = 0;
    for(let index in args){
        sum1 += args[index]
    }
    console.log(sum1)
    return sum1;

    //we can do it by using reduce as well
    let sum2 = args.reduce((acc,val) => {
        return acc+val;
    },0)
    console.log(sum2)
    return sum2;
}

//For the purpose of user debugging.
sum(1, 2, 3);                // 6
sum(10);                     // 10
sum();                       // 0
sum(5, -5, 10, 20);          // 30
sum(100, 200, 300, 400);     // 1000