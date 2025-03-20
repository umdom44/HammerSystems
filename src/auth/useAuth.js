// src/auth/useAuth.js
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_USER, SIGNOUT_SUCCESS } from 'redux/constants/Auth';

const useAuth = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);

    const logout = () => {
        localStorage.removeItem('auth_token');
        dispatch({ type: CLEAR_USER });
        dispatch({ type: SIGNOUT_SUCCESS });
    };

    return {
        token,
        logout,
    };
};

export default useAuth;