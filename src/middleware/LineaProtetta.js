import { useNavigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode"
import Login from "../pages/Login";
import { useEffect } from "react";

const isAuth = () => {
    return JSON.parse(localStorage.getItem('utenteLoggato'))
}

export const useSession = () => {
    const session = isAuth()
    const decodeSesssion = session ? jwtDecode(session) : null

    const navigate = useNavigate()

    useEffect(() => {
        if(!session) {
            navigate('/', {replace: true})
        }
    }, [navigate, session])

    return decodeSesssion
}

const LineaProtetta = () => {
    const auth = isAuth()

    return auth ? <Outlet/> : <Login/>
}

export default LineaProtetta