import '../sass/main.scss';
import Search from './models/Search';
import Recipe from './models/Recipe';
import Similar from './models/Similar';
import { elements, displayLoader, clearLoader, clearRecipe } from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as similarView from './views/similarView';


const state = {};

/**
SEARCH CONTROLLER
 */

const controlSearch = async () => {
    //get the query from the view
    const query = searchView.getInputData();

    if(query) {
        //create new search object and add to state
        state.search = new Search(query);

        //Prepare the UI for changes
        searchView.clearInput();
        searchView.clearResult();
        displayLoader(elements.searchResList);

        try {
           //Search for recipes
            await state.search.getResults();
            clearLoader();

            //Render the results to the UI
            searchView.renderResults(state.search.result); 
        } catch (error) {
            alert('Error processing recipe!');
        }
        
    }
}

elements.searchForm.addEventListener('submit', e=> {
    e.preventDefault();
    controlSearch();
});

elements.btnElement.addEventListener('click', e => {
    const btn = e.target.closest('.btn');
    if(btn) {
        const goToPage = parseInt(btn.dataset.pn, 10);
        searchView.clearResult();
        searchView.renderResults(state.search.result, goToPage);
    }
});

/**RECIPE CONTROLLER */

const controlRecipe = async () => {
    //get the ID from the url bar
        const id = window.location.hash.replace('#', '');

    if(id) {
        //Create a new recipe object
        state.recipe = new Recipe(id);

        //Prepare the UI for changes
        clearRecipe();
        displayLoader(elements.recipe);
        
        try {
            //Get recipe data
            await state.recipe.getRecipe();
            state.recipe.ingredients();
            clearLoader();

            //Render recipe
            recipeView.renderRecipe(state.recipe);

        } catch (error) {
           alert('Something went wrong!');
        }
    }
}
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
//window.addEventListener('hashchange', controlRecipe);
//window.addEventListener('load', controlRecipe);




const controlSimilar = async () => {
    //Get the ID from the url bar;
    const id = window.location.hash.replace('#', '');

    if(id) {
        //create a new similar recipe object
        state.similar = new Similar(id);

        //Prepare UI for changes
        clearRecipe();

        try {
            //Get the similar recipe data
            await state.similar.getSimilar();
           
            //Display the similar recipe data
            similarView.renderSimilarResults(state.similar.result);
            console.log(state.similar);
            
        } catch (error) {
            console.log('Something\'s gone wrong with the data');
        }
    }
};

window.addEventListener('hashchange', controlSimilar);
