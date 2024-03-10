function displayGreet(displayName){
    console.log("hello");
    displayName();
    console.log("Good Morning!!");
}
displayGreet(function(){
    console.log("Murali Krishna");
});