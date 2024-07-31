
import axios from 'axios';
import { userLogin, getUsers, userLogout, updateFromCookie } from '../reducers/userSlice';
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
    
    try {
        const response = await axios.post('api/company/login', user, {
            withCredentials: true
        });

        // Verificar el estado de la respuesta
        if (response.status === 200) {
            const userData = response.data;
            console.log('Response data:', userData);

            const expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + 3600 * 1000);

            const userDataJSON = JSON.stringify({ ...userData, auth: true });

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
        } else {
            // Si la respuesta no es exitosa, lanzar un error
            throw new Error('Login failed with status code: ' + response.status);
        }
    } catch (error) {
        console.error('Error during login:', error); // Agrega este log
        MySwal.fire({
            title: <strong>Error</strong>,
            html: <i>Login Failed!</i>,
            icon: 'error',
            background: '#1d1d1d',
        });
    }
};

export const userLogoutAct = () => async (dispatch) => {
    try {
        await axios.post('http://localhost:3001/api/logout', null, {
            withCredentials: true
        });
        document.cookie = `miCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        dispatch(userLogout())
    } catch (error) {
        window.alert("Request failed:", error);
    }
};

