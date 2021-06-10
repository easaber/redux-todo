import * as actionType from './todoTypes'

const initialState = {
    loading: false,
    todo: [],
    error:''
}

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.FETCH_TODO_REQUEST: return {
            ...state,
            loading: true
        }

        case actionType.FETCH_TODO_SUCCESS: return {
            ...state,
            loading: false,
            todo: action.payload,
            error: ''
        }

        case actionType.FETCH_TODO_FAILURE: return {
            ...state,
            loading: false,
            todo: [],
            error: action.payload
        }

        default: return state
    }
}

export default todoReducer