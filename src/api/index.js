import axios from 'axios';

const BASE_URL = 'https://let-is-go-lunch.herokuapp.com/v1/restaurants';
const RANDOM_URL = `${BASE_URL}/random`;

export const fetchRandom = () => axios.get(RANDOM_URL);
export const fetchRestaurants = () => axios.get(BASE_URL);
export const newRestaurant = restaurant =>
  axios.post(BASE_URL, restaurant);
export const updateRestaurant = restaurant =>
  axios.put(BASE_URL, restaurant);
export const removeRestaurant = id =>
  axios.delete(BASE_URL, { data: { id } });