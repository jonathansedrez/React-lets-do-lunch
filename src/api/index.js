import axios from 'axios';

const BASE_URL = 'https://let-is-go-lunch.herokuapp.com/v1/restaurants';
const RANDOM_URL = `${BASE_URL}/random`;

const api = {
  fetchRandom : () => axios.get(RANDOM_URL),
  fetchRestaurants : () => axios.get(BASE_URL),
  newRestaurant : restaurant => axios.post(BASE_URL, restaurant),
  updateRestaurant : restaurant => axios.put(BASE_URL, restaurant),
  removeRestaurant : id => axios.delete(BASE_URL, { data: { id } })
}

export default api;
