import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'm0AxEcWZEWmsh4KBJ8uzgstLGlVKp1Q9gfJjsndO85rGQuel67',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
  try {
      const { data } = await axios.get(`${BASE_URL}/${url}`, options);
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // rethrow the error to handle it in the component
  }
};

