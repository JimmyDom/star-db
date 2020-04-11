export default class apiService {
    _apiBase = "https://api.magicthegathering.io/v1/";
    async getResource(url) {

        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    async getAllCards() {
        const res = await this.getResource(`cards/`);
        return res.cards.map(this._transformCards);
    }

    async getCards(id) {
        const res =  await this.getResource(`cards/${id}`);
        return this._transformCards(res.card);
    }

    _transformCards(cards) {
        return {
            name: cards.name,
            artist: cards.artist,
            originalText: cards.originalText,
            multiverseid: cards.multiverseid,
            imageUrl: cards.imageUrl,
        }
    }
}