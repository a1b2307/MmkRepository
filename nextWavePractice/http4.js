let option={
    method:"GET"
}
let url="https://gorest.co.in/public-api/users/5806491";
fetch(url,option)
.then(function(response){
    return response.json();
})
.then(function(jsonData){
    console.log(jsonData);
});