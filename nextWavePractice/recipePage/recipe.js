let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let mainTitle = document.getElementById("tomatoPasta");
mainTitle.textContent = recipeObj.title;

let imageId = document.getElementById("imageId");
imageId.src = recipeObj.imgSrc;

let unOrderListItems = document.getElementById("unOrderListItems");

let ingredientsList = recipeObj.ingredients;
let length_i = ingredientsList.length;

for (ingred of ingredientsList) {

    let listItem = document.createElement("li");
    unOrderListItems.appendChild(listItem);
    listItem.textContent = ingred;
    listItem.classList.add("list_items")




}
/*
function ingredientsListItems(indgredient){
    let listItem = document.createElement("li");
    listItem.appendChild(unOrderListItems);
    listItem.textContent = indgredient;
    listItem.classList.add("list_items")

}
*/



/*
for (indgredient of ingredientsList){
    console.log(indgredient)
    ingredientsListItems(indgredient);
}*/