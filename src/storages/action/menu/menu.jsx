import axios from "axios";

const getAllMenu = (page, sort, search) => async (dispatch) => {
  try {
    dispatch({type : 'GET_ALL_MENU_REQUEST'})
    const result = await axios.get(`${process.env.REACT_APP_URL}?page=${page}&sort=${sort}&search=${search}`)
    const menu = result.data.data
    dispatch({
      type: 'GET_ALL_MENU_SUCCESS', payload: menu} )
  } catch (error) {
    dispatch({
      type: 'GET_ALL_MENU_FAILURE',
      payload: error.message
    })
  }
}


export default getAllMenu