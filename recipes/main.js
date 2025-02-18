import recipes from "./recipes.js";

function randint(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

function getRandomListEntry(list) {
    const randomNumber = randint(list.length)
    return list[randomNumber]
}

function tagsTemplate(tags) {
    let tagHTML = '<ul class="recipe-tags">'
    tags.forEach(tag => {
        tagHTML += `<li>${tag}</li>`;
    });
    tagHTML += `</ul>`;
    return tagHTML;
}

function ratingsTemplate(rating) {
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
    >`
    
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
	html += `</span>`;
	return html;
}

function renderRecipeTemplate(recipe) 
{
    let html =
        `<div class="recipe-card">
            <img class="recipe-img" src="${recipe.image}" alt="">
            <div class="desc-grid">
            ${tagsTemplate(recipe.tags)}
            <h2><a href="#">${recipe.name}</a></h2>
            ${ratingsTemplate(recipe.rating)}
            <p class="recipe-description">${recipe.description}</p>
            </div>
        </div>`;
    return html;
}

function init() {
    displayRecipes([getRandomListEntry(recipes)]);
}

init();

function displayRecipes(recipes) {
    const recipeCards = document.querySelector(".recipe-cards");
    recipeCards.innerHTML = '';
    
    if (recipes.length === 0) {
        recipeCards.innerHTML = `<h2>No results, please try another search term</h2>`;
    } else {
        recipes.forEach(recipe => {
            recipeCards.innerHTML += renderRecipeTemplate(recipe);
        })
    }
}

function filterRecipes(list, search) {
    search = search.toLowerCase()
    return list.filter(item => 

            item.name.includes(search) || 
            item.description.includes(search) || 
            item.tags.some(tag => tag.includes(search)) ||
            item.recipeIngredient.some(tag => tag.includes(search))

        ).sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
    event.preventDefault();
    const searchInput = document.querySelector("#search").value;
    const filteredRecipes = filterRecipes(recipes, searchInput);
    displayRecipes(filteredRecipes)
}

document.querySelector("#recipeButton").addEventListener("click", searchHandler);

document.querySelector(".search").addEventListener("submit", searchHandler)