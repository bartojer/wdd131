const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.src = "https://picsum.photos/200";
newImage.setAttribute("alt", "random image from picsum");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
document.body.appendChild(newSection);

const newHeading = document.createElement("h2");
newHeading.innerText = "Ingredients";
document.body.appendChild(newHeading);

const ingredientData = ["Pinto beans", "Corn", "Spices", "Tortillas"];
const portionData = ["1 15 oz can", "1 15 oz can", "1 tbsp", "8"];
const ingredientList = document.createElement("ul");
for (let i = 0; i < ingredientData.length; i++) {
    const newIngredient = document.createElement("li");
    newIngredient.innerText = `${ingredientData[i]} - ${portionData[i]}`;
    ingredientList.appendChild(newIngredient);
}
document.body.appendChild(ingredientList);