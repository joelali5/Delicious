import { elements } from "./base";

const createIngredient = ingredient => `
    <li class="recipe__ingredient--item">
        ${ingredient}
    </li>
`;

export const renderRecipe = recipe => {
    const markup = `
        <div class="recipe__head">
            <img src="${recipe.image}" class="recipe__img">
            <p class="recipe__title">${recipe.title}</p>
        </div>

        <div class="recipe__ingredient">
            <p class="recipe__ingredient--title">Ingredients</p>
            <ul class="recipe__ingredient--list">
                ${recipe.newIngredients.map(el => createIngredient(el)).join('')}
            </ul>
        </div>

        <div class="recipe__details">
            <p class="recipe__time">
                Time: 
                <span class="cook__time">
                ${recipe.time}
                </span>
                minutes
            </p>

            <p class="recipe__servings">
                Servings: 
                <span class="recipe__serving">
                ${recipe.servings}
                </span>
            </p>

            <p class="recipe__health-score">
                HScore: 
                <span class="score">
                ${recipe.healthScore}
                </span>
            </p>
        </div>

        <a href="${recipe.url}" class="source__url" target="_blank">Learn more</a>
    `;

    elements.recipe.insertAdjacentHTML('afterbegin', markup);
};

