const initialState = {
    data: null,
    isLoading: false
}

export const addMenuReducer = (state = initialState, action) => {
    switch(action.type){
        case 'POST_MENU_REQUEST':
          return {
            ...state,
            isLoading: true
          }
        case 'POST_MENU_SUCCESS':
          return {
            ...state,
            data: action.payload,
            isLoading: false
          }
        case 'POST_MENU_FAILURE':
          return {
            ...state,
            isLoading: false,
            Error: action.payload
          }
        default:
         return state
    }
}