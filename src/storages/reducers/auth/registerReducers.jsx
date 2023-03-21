const initialState = {
    data: [],
    newError: null,
    isLoading: false
}


 const RegisterUserReducers = (state = initialState, action) => {
    if(action.type === 'USER_REGISTER_PENDING'){
        return {
            ...state,
            newError: null,
            isLoading: true
        }
    } else if(action.type === 'USER_REGISTER_SUCCESS'){
        return {
            ...state,
            isLoading: false
        }
    } else if(action.type === 'USER_REGISTER_FAILURE'){
        return {
            ...state,
            newError: action.payload,
            isLoading: false,
        }
    } else {
        return state
    }
}


export default RegisterUserReducers