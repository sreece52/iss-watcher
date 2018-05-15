import axios from 'axios';

export const getPeople = () => axios.get('http://api.open-notify.org/astros.json', {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
)
