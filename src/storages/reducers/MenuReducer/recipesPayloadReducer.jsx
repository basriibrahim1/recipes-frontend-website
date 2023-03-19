const initialState = {
    data: [],
    isLoading: false,
    Error: null
}

export const menuPayloadReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_MENU_REQUEST':
          return {
            ...state,
            isLoading: true
          }
        case 'GET_MENU_SUCCESS':
          return {
            ...state,
            isLoading: false,
            data: action.payload
          }
        case 'GET_MENU_FAILURE':
          return {
            ...state,
            isLoading: false,
            Error: action.payload
          }
        default:
         return state
      }
}


