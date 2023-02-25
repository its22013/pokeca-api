import axios from 'axios'

const API_URL = 'https://api.pokemontcg.io/v2'
const API_KEY = '4282e101-4cef-4890-a468-842f8e6a61d1'

export async function searchCards (query) {
  const response = await axios.get(`${API_URL}/cards`, {
    headers: {
      'X-Api-Key': API_KEY
    },
    params: {
      q: `name:${query}`
    }
  })
  return response.data.data
}
