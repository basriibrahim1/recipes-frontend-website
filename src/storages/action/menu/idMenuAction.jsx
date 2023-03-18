import axios from "axios";

const idMenuAction = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const result = await axios.get(`${process.env.REACT_APP_URL}/${id}`,{
        headers: {
            "Authorization": `Bearer ${token}`
          },
        })
        const menu = result.data.data
    dispatch({
      type: 'MENU_ID_REQUEST',
      payload: menu
    })
    dispatch({
      type: 'MENU_ID_SUCCESS',
      payload: menu
    })
  } catch (error) {
    dispatch({
      type: 'MENU_ID_FAILURE',
      payload: error.message
    })
  }
}


export default idMenuAction
