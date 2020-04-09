export default class apiService {
    // _apiBase = "https://swapi.co/api/";
    _apiBase = "https://pokeapi.co/api/v2/";
    async getResource(url) {

        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    async getAllPokemon() {
        const res = await this.getResource(`ability/`);
        return res.results;
    }

    getPokemon(id) {
        const res =  this.getResource(`ability/${id}`);
        return res;
    }

/*    async getAllPlanets() {
        const res = await this.getResource(`planets/`);
        return res.results;
    }

    getPlanets(id) {
        return this.getResource(`planets/${id}`);
    }

    async getAllStarhips() {
        const res = await this.getResource(`starships/`);
        return res.results;
    }

    getStarships(id) {
        return this.getResource(`starships/${id}`);
    }*/
}