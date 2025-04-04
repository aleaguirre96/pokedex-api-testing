const axios = require('axios');

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 5000
});

/**
 * Relative or full API URL
 * @param {*} url 
 */
const get = async (url) => {
    try {
        const response = await api.get(url);
        return response;
    } catch (error) {
        console.error(`Error getting information from ${error}:`, error);
        throw error;
    }
}

module.exports = { get };