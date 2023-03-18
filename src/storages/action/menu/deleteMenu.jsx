import axios from "axios"
 
const deleteMenuAction = (id) => async(dispatch) =>{
    try {
        const token = localStorage.getItem('token')
        dispatch({type : 'DELETE_MENU_REQUEST'})
        const result = await axios.delete(`${process.env.REACT_APP_URL}/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
              },
        })
        console.log(result)
        const menu = result.data
        dispatch({type: 'DELETE_MENU_SUCCESS',payload: menu})
      } catch (error) {
        dispatch({
          type: 'DELETE_MENU_FAILURE',
          payload: error.message
        })
      }
    
}


export default deleteMenuAction