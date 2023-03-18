import axios from "axios";

const menuPayloadAction = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('refresh_token')
    dispatch({type : 'GET_MENU_REQUEST'})
    const result = await axios.get(`${process.env.REACT_APP_URL}/user-recipes/recipes`,{
        headers: {
            "Authorization": `Bearer ${token}`
          },
    })
    const menu = result.data.data
    dispatch({
      type: 'GET_MENU_SUCCESS', payload: menu} )
  } catch (error) {
    dispatch({
      type: 'GET_MENU_FAILURE',
      payload: error.message
    })
  }
}


export default menuPayloadAction