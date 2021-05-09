import axios from 'axios';

export const getHotels = () => {
    return axios.get('/hotels', {});
}