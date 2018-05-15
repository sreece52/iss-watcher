import axios from 'axios';

export const getPeople = () => axios.get('http://api.open-notify.org/astros.json');

export const getLocation = () => axios.get('http://api.open-notify.org/iss-now.json');
