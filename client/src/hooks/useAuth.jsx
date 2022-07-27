

import { useDispatch, useSelector } from 'react-redux'
import { authAction } from "../redux/auth/auth.action";

const useAuth = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const autenticate = dispatch(authAction());
        autenticate()
    }, [])
    
 return 'holamundo'   
}


export default useAuth;