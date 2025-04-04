const { get } = require('../utils/apiClient')

describe('PokeAPI - Testing', () => {
    test('Get data from Nincada', async () => {
        const res = await get('pokemon/nincada');
        expect(res.status).toBe(200);
        expect(res.data.id).toEqual(290);
    })

    test('Get evolution line', async () => {
        const res = await get('/pokemon-species/nincada');
        expect(res.status).toBe(200);
        const evolutionChain = await get(res.data.evolution_chain.url);
        expect(evolutionChain.data).toHaveProperty('chain');
        expect(evolutionChain.data.chain.evolves_to[0].species.name).toBe('ninjask');
    })
});