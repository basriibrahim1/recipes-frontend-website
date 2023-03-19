const initialState = {
    data: [],
    isLoading: true,
    Error: null
}

export const idMenuReducer = (state = initialState, action) => {
    switch(action.type){
        case 'MENU_ID_REQUEST':
          return {
            ...state,
            data: action.payload,
            isLoading: true
          }
        case 'MENU_ID_SUCCESS':
          return {
            ...state,
            data: action.payload,
            isLoading: false
          }
        case 'MENU_ID_FAILURE':
          return {
            ...state,
            isLoading: false,
            Error: action.payload
          }
        default:
         return state
    }
}