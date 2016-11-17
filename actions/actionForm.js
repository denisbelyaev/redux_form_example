"use strict"
// Redux Standard API-calling Actions (RSAAs)
//dispatches Flux Standard Actions (FSAs)
import { CALL_API } from 'redux-api-middleware';

export const USER_REQUEST = 'user/REQUEST'
export const USER_SET = 'user/SET'
export const USER_ERROR = 'user/ERROR'

export function updateUser(userId) {
    console.log(userId);
    return {
        [CALL_API]: {
            endpoint: '127.0.0.1:4444/',
            method: 'POST',
            types: [USER_REQUEST, USER_SET, USER_ERROR]
        }
    }
}


