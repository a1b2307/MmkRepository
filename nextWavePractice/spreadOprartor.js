// let person = {name:"mahesh",age:23};
// let personDetails = {...person,add:"hyderabad"};
// console.log(personDetails);

let arr = [1,2,3,4,5];
function add(a,b,c,d,e){
    console.log(a+b+c+d+e);
}
add(...arr);