import { isFSA } from 'flux-standard-action';

function isPromise(val) {
    return val && typeof val.then === 'function';
}

export default function promiseMiddleware({ dispatch }) {
    return next => action => {
        if (!isFSA(action)) {
            return isPromise(action)
                ? action.then(dispatch)//выполняем промис, результат диспатчим ({type: '...', payload: ...})
                : next(action);
        }

        return isPromise(action.payload)
            ? action.payload.then(
                response => {
                //TODO: add default type parse
                //let typeParse = action.meta.typeParse || "json";
                //console.log(response[typeParse]);
                //let parsed = response[typeParse]();

                let parsed = response.json();

                parsed.then(result => {
                    dispatch({...action, payload: result});
                })
            },
                error => {
                dispatch({ ...action, payload: error, error: true });
                return Promise.reject(error);
            })
            : next(action);
    };
}