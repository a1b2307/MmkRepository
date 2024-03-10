let data={
    name:"mmk",
    email:"mmk234@gmail.com",
    gender:"Male",
    status:"Active"
}
let option={
    method:"POST",
    headers:{
        'Content-Type':'application/json',
        Accept:'application/json',
        Authorization:'Bearer d73058aac546d6a720ee8b74e3dfb3498c97122540e953d625f448d963e33ddf'
    },
    body:JSON.stringify(data)
}
let url="https://gorest.co.in/public-api/users";
fetch(url,option)
.then(function(response){
    return response.json();
})
.then(function(jsonData){
    console.log(jsonData);
});