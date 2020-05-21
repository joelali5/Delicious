import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        //const key = '1462b5c4536245548366d3a0a3b7ad74';
        const key = '437c0ff8f9fa494e87973ac89bab76ef';
        try {
            const res = await axios(`https://api.spoonacular.com/recipes/search?query=${this.query}&apiKey=${key}&number=40`);
            this.result = res.data.results;
        } catch (error) {
            alert('Error processing recipe');
        } 
    }
}