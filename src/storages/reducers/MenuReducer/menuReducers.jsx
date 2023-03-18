const initialState = {
    data: [],
    isLoading: true
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
            data: []
          }
        default:
         return state
      }
}


