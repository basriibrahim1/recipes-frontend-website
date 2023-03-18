const initialState = {
    data: null,
    isLoading: false
}


 const LoginUserReducers = (state = initialState, action) => {
    if(action.type === 'USER_LOGIN_PENDING'){
        return {
            ...state,
            isLoading: true
        }
    } else if(action.type === 'USER_LOGIN_SUCCESS'){
        return {
            ...state,
            isLoading: false
        }
    } else {
        return state
    }
}


export default LoginUserReducers