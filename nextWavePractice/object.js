let person={
    name:"keerthi",
    age:25,
    salary:250000,
    comapany:"wipro",
    "job role":"JR Devloper",
    hobbies:["singing","dancing","reading books"],
    car:{
        brand:"Audi",
        model:2020,
        color:"blackish blue",
        cost:3500000
    }
}
console.log(person);
console.log(person.name);
let { name , age}=person;
console.log("name:"+name+" and age:"+age);
console.log(person.hobbies);
console.log(person.car);
