export default class apiService {
    _apiBase = "http://apxuapi.herokuapp.com/api/";

    async getResource(url) {

        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`people/`);
        return res.results.map(this._transformPerson);
    }

    async getPeople(id) {
        const res =  await this.getResource(`people/${id}`);
        return this._transformPerson(res);
    }

    async getAllPlanets() {
        const res = await this.getResource(`planets/`);
        return res.results.map(this._transformPerson);
    }

    async getPlanet(id) {
        const res =  await this.getResource(`planets/${id}`);
        return this._transformPlanet(res);
    }

    async getAllStarships() {
        const res = await this.getResource(`people/`);
        return res.results.map(this._transformPerson);
    }

    async getStarships(id) {
        const res =  await this.getResource(`people/${id}`);
        return this._transformPerson(res.results);
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            diameter: planet.diameter,
            population: planet.population,
            gravity: planet.gravity,
        }
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            birth_year: person.birth_year,
            gender: person.gender,
            mass: person.mass,
        }
    }
}