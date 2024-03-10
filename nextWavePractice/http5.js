//id :5806491
let option={
    method:"DELETE",
    headers:{
        'Content-Type':'application/json',
        Accept:'application/json',
        Authorization:'Bearer d73058aac546d6a720ee8b74e3dfb3498c97122540e953d625f448d963e33ddf'
    }
}
let url="https://gorest.co.in/public-api/users/5806491";
fetch(url,option)
.then(function(response){
    return response.json();
})
.then(function(jsonData){
    console.log(jsonData);
});