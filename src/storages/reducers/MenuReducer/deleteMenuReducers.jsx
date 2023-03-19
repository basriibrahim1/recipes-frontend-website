const initialState = {
    data: null,
    isLoading: false,
    Error: null
}

export const deleteMenuReducer = (state = initialState, action) => {
    switch(action.type){
        case 'DELETE_MENU_REQUEST':
          return {
            ...state,
            isLoading: true
          }
        case 'DELETE_MENU_SUCCESS':
          return {
            ...state,
            data: action.payload,
            isLoading: false
          }
        case 'DELETE_MENU_FAILURE':
          return {
            ...state,
            isLoading: false,
            Error: action.payload
          }
        default:
         return state
    }
}