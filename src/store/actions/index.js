import {
    MOVIES_LIST,
    MOVIE_DATA,
    GET_USER
} from '../types';
import axios from 'axios';


export const getUser = () => {
    const request = axios.get(`https://jsonplaceholder.typicode.com/users`)
                    .then( response => {
                        return response.data
                    });
    return {
        type:GET_USER,
        payload:request
    }              
}


export const moviesList = () => {
    return {
        type:MOVIES_LIST,
        payload:[
            {id:1,name:'Pulp fiction'},
            {id:2,name:'Pacific Rim'},
            {id:3,name:'Rambo'}
        ]
    }
}

export const movieData = () => {
    return {
        type:MOVIE_DATA,
        payload:{
            id:1,
            name:'Pulp fiction',
            actors:['Travolta','Thurman'],
            year:1990,
            director:'Tarantino'
        }
    }
}