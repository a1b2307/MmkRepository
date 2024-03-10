let formData={
    name:"",
    email:"",
    status:"Active",
    gender:"male"
}

let makingStatusEle = document.getElementById("status");
makingStatusEle.addEventListener("change",function(event){
    formData.status = event.target.value;
    //console.log(formData);
});

let genderMaleEle = document.getElementById("genderMale");
genderMaleEle.addEventListener("change",function(event){
    formData.gender = event.target.value;
    //console.log(genderMaleEle);
});

let genderFemaleEle = document.getElementById("genderFemale");
genderMaleEle.addEventListener("change",function(event){
    formData.gender = event.target.value;
    //console.log(genderFemaleEle);
});

let nameEle = document.getElementById("name");
let paraEle = document.getElementById("nameErrMsg");
nameEle.addEventListener("change",function(event){
    if(event.target.value === ""){
        paraEle.textContent = "Required*";
    }else{
        paraEle.textContent = "";
    }
    formData.name = event.target.value;
});
let emailEle = document.getElementById("email");
let paraEle1 = document.getElementById("emailErrMsg");
nameEle.addEventListener("change",function(event){
    if(event.target.value === ""){
        paraEle1.textContent = "Required*";
    }else{
        paraEle1.textContent = "";
    }
    formData.email = event.target.value;
});

function submitFormData(formData){
    let options={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            Authorization:"Bearer d73058aac546d6a720ee8b74e3dfb3498c97122540e953d625f448d963e33ddf"
        },
        body:JSON.stringify(formData)
    };
    
    let url = "https://gorest.co.in/public-api/users";

    fetch(url, options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        console.log(jsonData);
    });
}

let formEle = document.getElementById("myForm");
formEle.addEventListener("submit",function(event){
    event.preventDefault();
    submitFormData(formData);
});