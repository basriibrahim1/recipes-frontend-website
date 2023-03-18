 import axios from "axios"
 
const addMenuAction = (formData) => async(dispatch) =>{
    try {
        const token = localStorage.getItem('token')
        dispatch({type : 'POST_MENU_REQUEST'})
        const result = await axios.post(process.env.REACT_APP_URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`,
              },
        })
        console.log(result)
        const menu = result.data
        dispatch({type: 'POST_MENU_SUCCESS',payload: menu})
      } catch (error) {
        dispatch({
          type: 'POST_MENU_FAILURE',
          payload: error.message
        })
      }
    
}


export default addMenuAction