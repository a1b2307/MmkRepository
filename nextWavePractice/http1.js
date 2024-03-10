let option={
    method:"GET"
}
let url="https://gorest.co.in/public-api/users";
fetch(url,option)
.then(function(response){
    //return response.status;
    // return response.statusText;
    //return response.headers;
    // return response.text(); //-->data
    //return response.url;
    //return response.text();
    return response.json();
})
// .then(function(url){
//     console.log(url);
// });
// .then(function(data){
//     let parseData=JSON.parse(data);
//     console.log(parseData);
// });
.then(function(jsonData){
    console.log(jsonData);
});