import axios from 'axios';
import {GET_OFFERS, OFFERS_LOADING} from './types';
//import {returnErrors} from './errorActions';

export const getOffers = (id = null) => dispatch => {

    console.log("HELLO")

    dispatch(setItemsLoading() );
   
    if( !id ){     // JEŚLI NIE DAMY PARAMETRU ID, POBIERAMY WSZYSTKIE OFERTY
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            dispatch({
                type:GET_OFFERS,
                payload:res.data
            })
        })

        
        //.catch(err => dispatch(returnErrors(err.response.data, err.response.status)))

    } else {  // JEŚLI DAMY PARAMETR ID, POBIERAMY TYLKO ULUBIONE OFERTY DANEGO UŻYTKOWNIKA
        axios
        .get(`/api/offers/${id}`)
        .then(res => {
            dispatch({
                type:GET_OFFERS,
                payload:res.data
            })
        })
        //.catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
    }
    
}

export const setItemsLoading = () => {
    return {
        type:OFFERS_LOADING
    }
}