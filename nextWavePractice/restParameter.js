function add(...args){
    let result=0;
    for(let arg of args){
        result = result + arg;
    }
    console.log(result);
}
add(2,3,4,5,6);
add(2,5,6);