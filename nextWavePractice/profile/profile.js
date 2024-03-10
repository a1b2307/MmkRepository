let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};
let profileContainer = document.getElementById("profileContainer");
profileContainer.classList.add("d-flex", "flex-column", "justify-content-center")
let imgContainer = document.getElementById("imgContainer")

let imgElement = document.createElement("img");
imgElement.src = profileDetails.imgSrc;
imgElement.classList.add("img-size")
imgContainer.appendChild(imgElement);


let headingElement = document.createElement("h1");
headingElement.textContent = profileDetails.name;
headingElement.classList.add("heading");
imgContainer.appendChild(headingElement);

let headingElement1 = document.createElement("h1");
headingElement1.textContent = "Age : " + profileDetails.age;
headingElement1.classList.add("heading");
imgContainer.appendChild(headingElement1);