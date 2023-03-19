const initialState = {
    data: [],
    isLoading: true,
    Error: null
}

export const MenuReducers = (state = initialState, action) => {
    switch(action.type){
        case 'GET_ALL_MENU_REQUEST':
          return {
            ...state,
            isLoading: true
          }
        case 'GET_ALL_MENU_SUCCESS':
          return {
            ...state,
            isLoading: false,
            data: action.payload
          }
        case 'GET_ALL_MENU_FAILURE':
          return {
            ...state,
            isLoading: false,
            Errror: action.payload
          }
        default:
         return state
      }
}


