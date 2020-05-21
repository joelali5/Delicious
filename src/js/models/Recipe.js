import axios from 'axios';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            //const key = '1462b5c4536245548366d3a0a3b7ad74';
            const key = '437c0ff8f9fa494e87973ac89bab76ef';
            const res = await axios(`https://api.spoonacular.com/recipes/${this.id}/information?apiKey=${key}&includeNutrition=false`);
            this.title = res.data.title;
            this.image = res.data.image;
            this.time = res.data.readyInMinutes;
            this.servings = res.data.servings;
            this.healthScore = res.data.healthScore;
            this.url = res.data.sourceUrl;
            this.extendedIng = res.data.extendedIngredients;
        } catch (error) {
            alert('Something is not correct');
        }
    }

    ingredients() {
        const newIngredients = this.extendedIng.map(el => {
            let ingredient;
            ingredient = el.originalString;
            return ingredient;
        });
        this.newIngredients = newIngredients;
    }

}