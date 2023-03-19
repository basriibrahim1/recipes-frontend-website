import axios from "axios";

export const RegisterUserAction = (data) => async(dispatch) => {
    
    try {
        dispatch({type: 'USER_REGISTER_PENDING'})
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, data,{
            headers: {
                "Content-Type": "application/json",
            }
        })
        console.log('data adalah:', result.data.message)
        const user = result.data.data
        dispatch({type: 'USER_REGISTER_SUCCESS', payload:user})
    } catch (error) {
       dispatch({type: 'USER_REGISTER_FAILURE', payload: error.response.data.message})
       console.log(error)
    }
}