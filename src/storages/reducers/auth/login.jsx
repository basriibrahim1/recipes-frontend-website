const initialState = {
    data: null,
    error: null,
    isLoading: false
}


 const LoginUserReducers = (state = initialState, action) => {
    if(action.type === 'USER_LOGIN_PENDING'){
        return {
            ...state,
            isLoading: true,
            error: null
        }
    } else if(action.type === 'USER_LOGIN_SUCCESS'){
        return {
            ...state,
            isLoading: false,
            error: null
        }
    } else if(action.type === 'USER_LOGIN_FAILURE'){
        return {
            ...state,
            error: action.payload,
            isLoading: false
        }
    } else {
        return state
    }
}


export default LoginUserReducers