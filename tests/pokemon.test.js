const api = require('../utils/apiClient')

describe('PokeAPI - Testing', () => {
    test('Get data from Nincada', async () => {
        const res = await api.get('pokemon/nincada');
        expect(res.status).toBe(200);
        expect(res.data.id).toEqual(290);
    })
});