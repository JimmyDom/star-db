export default class apiService {
    _apiBase = "http://apxuapi.herokuapp.com/api/";
    _imgBase = "https://apxuapi.herokuapp.com/assets/img/";

    getResource = async (url) => {

        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    };

    getAllPeople = async () => {
        const res = await this.getResource(`people/`);
        return res.results.map(this._transformPerson);
    };

    getPeople = async (id) => {
        const res =  await this.getResource(`people/${id}`);
        return this._transformPerson(res);
    };

    getPeopleImg = ({ id }) => {
        return `${this._imgBase}characters/${id}.jpg`
    };

    getAllPlanets = async () => {
        const res = await this.getResource(`planets/`);
        return res.results.map(this._transformPlanet);
    };

    getPlanet = async (id) => {
        const res =  await this.getResource(`planets/${id}`);
        return this._transformPlanet(res);
    };

    getPlanetImg = ({ id }) => {
        return `${this._imgBase}planets/${id}.jpg`
    };

    getAllStarships = async () =>  {
        const res = await this.getResource(`starships/`);
        return res.results.map(this._transformStarships);
    };

    getStarships = async (id) => {
        const res =  await this.getResource(`starships/${id}`);
        return this._transformStarships(res);
    };

    getStarshipsImg = ({ id }) => {
        return `${this._imgBase}starships/${id}.jpg`
    };

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
    };

    _transformStarships = (starships) => {
        return {
            id: this._extractId(starships),
            name: starships.name,
            model: starships.model,
            max_atmosphering_speed: starships.max_atmosphering_speed,
            cost_in_credits: starships.cost_in_credits,
        }
    };
}