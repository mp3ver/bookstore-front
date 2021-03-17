import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {createLogger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";

import reducers from "./reducers/reducers"
import {GetBooks} from "./reducers/books";

import booksMiddleware from "./middleware/books"

/**
 * To initialize the store
 * @returns {Store<unknown, AnyAction> & Store<S, A> & {dispatch: Dispatch<A>}}
 */
export default function configureStore() {
    // define middleware
    const logger = createLogger();

    // create middleware
    const middleware = applyMiddleware(...[
        thunk,
        booksMiddleware()
    ]);

    // create a new store and return it
    var store = createStore(reducers, {},  middleware);
    return store;
}