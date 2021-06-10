import * as actionType from './todoTypes'
import axios from 'axios'

export const fetchTodoRequest = () => {
    return {
        type: actionType.FETCH_TODO_REQUEST
    }
}

export const fetchTodoSuccess = todos => {
    return {
        type: actionType.FETCH_TODO_SUCCESS,
        payload: todos
    }
}

export const fetchTodoError = error => {
    return {
        type: actionType.FETCH_TODO_FAILURE,
        payload: error
    }
}

export const fetchTodo = () => {
    return dispatch => {
        // Loading
        dispatch(fetchTodoRequest())

        // Wait 5 seconds
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            const todo = response.data.slice(0,11)
            // Show data
            dispatch(fetchTodoSuccess(todo))
        })
        .catch(error => {
            // Show error
            dispatch(fetchTodoError(error.message))
        })
        }, 2000)

       
        
        
    }
}

