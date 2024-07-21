import axios from 'axios';
import {userLogin, getUsers, userLogout} from '../reducers/userSlice';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const userLoginAct = (user) => async (dispatch) => {
    const MySwal = withReactContent(Swal);
    const Toast = MySwal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });
    try{
        const response = await axios.post('user/login', user, {
            withCredentials:true
        });
        const userData = response.data;

        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + 3600 * 1000);

        const userDataJSON = JSON.stringify({...userData, auth: true});

        document.cookie = `miCookie=${encodeURIComponent(userDataJSON)}; expires=${expirationDate.toUTCString()}; path=/`;

        dispatch(userLogin(userData));

        dispatch(updateFromCookie(userData));

        Toast.fire({
            icon: 'success',
            iconColor: 'white',
            title: <strong>Login Successfully!</strong>,
            html: <i>You are being redirected to the home</i>,
            color: '#fff',
            background: '#333',
        });

    } catch (error) {
        MySwal.fire({
            title: <strong>Error</strong>,
            html: <i>Login Failed!</i>,
            icon: 'error',
            background: '#1d1d1d',
        })
    }
};

export const getUserAct = () => async(dispatch) =>{
    try {
        const response = await axios.get('/login');
        return dispatch(getUsers(response.data));

    } catch (error) {
        window.alert("Request failed:", error);
    }
}

