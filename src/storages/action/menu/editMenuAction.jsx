import axios from "axios";

const editMenuAction = (editForm,id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('refresh_token')
    const result = await axios.put(`${process.env.REACT_APP_URL}/${id}`,editForm,{
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`,
      },
  })
  const menu = result.data.data
    dispatch({type : 'EDIT_MENU_REQUEST', payload: menu})
    dispatch({
      type: 'EDIT_MENU_SUCCESS', payload: menu} )
  } catch (error) {
    dispatch({
      type: 'EDIT_MENU_FAILURE',
      error: error.message
    })
  }
}


export default editMenuAction