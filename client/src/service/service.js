export default class Service {
    _apiBase = 'http://localhost:7070';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json()
    }

    getServices = async () => {
        return await this.getResource(`/api/services`);
    }

    getService = async (id) => {
        return await this.getResource(`/api/services/${id}`)
    }
}