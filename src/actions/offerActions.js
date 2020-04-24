/****************** FUNCTIONS ********************//*

@getOffers - pobranie ofert(z parametrem: oferty użytkownika; bez parametru: wszystkie oferty)
@setItemsLoading - pomocnicza funkcja (może jakaś animacja, podczas gdy oferty się ładują?)

*//**************************************************/

import axios from 'axios';
import {GET_OFFERS, OFFERS_LOADING} from './types';
import {returnErrors} from './errorActions';

export const getOffers = (id = null) => dispatch => {

    dispatch(setItemsLoading() );
   
    if( !id ){     // JEŚLI NIE DAMY PARAMETRU ID, POBIERAMY WSZYSTKIE OFERTY
        axios
        .get('http://vps817819.ovh.net/?categories=plynydoprania&fbclid=IwAR3xe63ulOUkjH2uTs5ZcZ0O4hn5j5d7clff8qBNZP5Jxa2Hzzuu4_gXT4g')  //FAKE API
        .then(res => {
            dispatch({
                type:GET_OFFERS,
                payload:res.data
            })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))

    } else {  // JEŚLI DAMY PARAMETR ID (użytkownika id, można też jego nazwę czy coś), POBIERAMY TYLKO ULUBIONE OFERTY DANEGO UŻYTKOWNIKA
        axios
        .get(`/api/offers/${id}`)
        .then(res => {
            dispatch({
                type:GET_OFFERS,
                payload:res.data
            })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
    }
    
}

export const setItemsLoading = () => {
    return {
        type:OFFERS_LOADING
    }
}