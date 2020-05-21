import { elements, limitRecipeTitle } from "./base";

 const renderResult = recipe => {
    const markup = `
        <li class="similar-recipe__item">
            <a class="similar-recipe__link "href="${recipe.id}">
                <p class="similar-recipe__title">${limitRecipeTitle(recipe.title)}</p>
            </a>
        </li>
    `;
    elements.similar.insertAdjacentHTML('beforeend', markup);
}

export const renderSimilarResults = recipes => {
    recipes.forEach(renderResult);
}