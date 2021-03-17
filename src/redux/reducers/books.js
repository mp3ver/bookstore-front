/**
 * initial state of the book list
 * @type {{books: []}}
 */
import BaseAction from "../helpers/BaseAction";

const initialState = {
    books: []
}

/**
 * List of actions
 * @type {string}
 */
export const GetBooksAction = "GetBooksAction";
export const SetBooksAction = "SetBooksAction";

/**
 * GetBooks action class
 */
export class GetBooks extends BaseAction {
    constructor(payload = {}) {
        super(GetBooksAction, payload);
    }
}

/**
 * SetBooks action class
 */
export class SetBooks extends BaseAction {
    constructor(payload) {
        super(SetBooksAction, payload);
    }
}

/**
 * The reducer function
 * @param state
 * @param action
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case SetBooksAction: return {
            ...state,
            books: action.payload
        }
        default:
            return state;
    }
}


