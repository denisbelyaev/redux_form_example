"use strict"

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import mailingForm from './mailingForm';

const reducer = combineReducers({
    form: formReducer     // <---- Mounted at 'form'
})

export default reducer;