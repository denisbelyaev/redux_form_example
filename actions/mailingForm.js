"use strict"
// Redux Standard API-calling Actions (RSAAs)
//dispatches Flux Standard Actions (FSAs)
import { CALL_API } from 'redux-api-middleware';

const sendForm = (formData) => {
    return (
        [CALL_API]: {
        endpoint: 'http://www.example.com/api/users',
            method: 'GET',
            types: [
            {
                type: 'REQUEST',
                headers: { 'Content-Type': 'application/json' }
                payload: (action, state) => ({ formData: formData }),
                meta: { source: 'userList' }
            },
            'SUCCESS',
            'FAILURE'
        ]
    }
    )
}

