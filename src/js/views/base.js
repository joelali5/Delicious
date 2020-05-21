export const elements = {
    searchForm: document.querySelector('.header__form'),
    searchInput: document.querySelector('.header__form--input'),
    searchResList: document.querySelector('.result__list'),
    result: document.querySelector('.result'),
    btnElement: document.querySelector('.result__page-elements'),
    recipe: document.querySelector('.recipe'),
    recipes: document.querySelector('.recipes'),
    similar: document.querySelector('.similar-recipe__list')
};



export  const displayLoader = parent => {
    const loader = `
        <div class="spinner">
            <svg class="spinner__icon">
                <use xlink:href="img/sprite.svg#icon-loop2"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

// Clear the loader after data has returned
export const clearLoader = () => {
    //document.querySelector('.spinner').innerHTML = '';
    document.querySelector('.spinner__icon').innerHTML = '';
}

export const limitRecipeTitle = (title, limit = 20) => {
    const newTitle = [];
    if(title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if(acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);
        return `${newTitle.join(' ')}...`;
    }
    return title;
}

export const clearRecipe = () => {
    elements.recipe.innerHTML = '';
    elements.similar.innerHTML = '';
};

