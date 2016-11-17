import { handleActions } from 'redux-actions'

const user = handleActions({

    [USER_REQUEST]: (state, action) => ({
        isFetching: true,
        isError: false,
        user: state.user
    }),

    [USER_SET]: (state, action) => ({
        isFetching: false,
        isError: false,
        user: action.payload // the API response body
    }),

    [USER_ERROR]: (state, action) => ({
        isFetching: false,
        isError: true,
        user: null
    })

})

export default user