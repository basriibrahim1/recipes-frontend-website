const initialState = {
    data: null,
    isLoading: false
}

export const editMenuReducer = (state = initialState, action) => {
    switch(action.type){
        case 'EDIT_MENU_REQUEST':
          return {
            ...state,
            isLoading: true
          }
        case 'EDIT_MENU_SUCCESS':
          return {
            ...state,
            data: action.payload,
            isLoading: false
          }
        case 'EDIT_MENU_FAILURE':
          return {
            ...state,
            isLoading: false,
            Error: action.payload
          }
        default:
         return state
    }
}