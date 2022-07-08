import {configureStore} from "@reduxjs/toolkit"
import reducerc from "./reducers"

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === "string") {
        return next({ type: action })
    }

    return next(action)
}


export const store = configureStore({
    reducer: reducerc,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
});
