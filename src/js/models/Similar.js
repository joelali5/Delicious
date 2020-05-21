import axios from 'axios';

export default class Similar {
    constructor(id) {
        this.id = id;
    }

    async getSimilar() {
        try {
            //const key = '1462b5c4536245548366d3a0a3b7ad74';
            const key = '437c0ff8f9fa494e87973ac89bab76ef';
            const res = await axios(`https://api.spoonacular.com/recipes/${this.id}/similar?apiKey=${key}&number=15`);
            this.result = res.data;
        } catch (error) {
            alert('Error processing similar recipe!');
        }
    }    
}