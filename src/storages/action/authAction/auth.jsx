import axios from "axios";

export const LoginUserAction = (data, navigate) => async(dispatch) => {
    
    try {
        dispatch({type: 'USER_LOGIN_PENDING'})
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, data)
        const user = result.data.data

        localStorage.setItem("token", user.token)
        localStorage.setItem("refresh_token", user.refreshToken)
        localStorage.setItem("email", user.email)
        localStorage.setItem("name", user.fullname)
        localStorage.setItem("id", user.id)
        dispatch({type: 'USER_LOGIN_SUCCESS', payload:user})
        navigate('/profile/recipes')
    } catch (error) {
        const errorCode = error.response.status;

        if (errorCode === 400) {
          console.log('Wrong Email or Password');
        } else {
          console.log(error);
        }
    }
}