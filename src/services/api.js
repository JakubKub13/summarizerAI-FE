import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const summarizeArticle = async (articleText) => {
    console.log('API_BASE_URL', API_BASE_URL);
    try {
        const response = await axios.post(`${API_BASE_URL}/summarize`, { text: articleText }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};