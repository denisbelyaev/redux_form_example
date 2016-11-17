"use strict"

import { handleActions } from 'redux-actions';

const reducer = handleActions({
    ADD_BOOK: (state, action) => (//state = books = [{}]
        [...state, action.payload]
    ),
    BOOK_LIST: (state, action) => {
        return action.payload;
    },


}, []);

export default reducer;