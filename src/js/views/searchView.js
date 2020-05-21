import { elements, limitRecipeTitle } from "./base";

export const getInputData = () => elements.searchInput.value;

//Clear the search Input field
export const clearInput = () => {
    elements.searchInput.value = '';
};


//Clear existing results
export const clearResult = () => {
    elements.searchResList.innerHTML = '';
    elements.btnElement.innerHTML = '';
};



const renderRecipe = recipe => {
    const markup = `
        <li class="result__item">
            <a class="result__link "href="#${recipe.id}">
                <p class="result__title">${limitRecipeTitle(recipe.title)}</p>
            </a>
        </li>  
    `;
    elements.searchResList.insertAdjacentHTML('afterbegin', markup);
};





//Create button
const createBtn = (page, type) => `
    <button class="btn result__btn-${type}" data-pn=${type === 'next' ? page + 1 : page - 1}>
        <span>page ${type === 'next' ? page + 1 : page - 1}</span>
    </button>
`;

//Render buttons
const renderBtn = (page, numRes, resPerPage) => {
    const pages = Math.ceil((numRes / resPerPage));
    let button;
    if(page === 1 && pages > 1) {
        //btn to next page
        button = createBtn(page, 'next');
    } else if(page < pages) {
        //both btn next and prev
        button = `
            ${createBtn(page, 'prev')}
            ${createBtn(page, 'next')}
        `
    } else if(page === pages && pages > 1) {
        //btn to prev page
        button = createBtn(page, 'prev');
    }

    elements.btnElement.insertAdjacentHTML('afterbegin', button);
}

export const renderResults = (recipes, page = 1, resPerPage = 15) => {
    //Display results per page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;
    recipes.slice(start, end).forEach(renderRecipe);

    //Display buttons
    renderBtn(page, recipes.length, resPerPage);
}