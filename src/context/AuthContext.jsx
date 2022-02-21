import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


const AuthContext =React.createContext();
export const AuthContextProvider=(props)=>{

    const [ loginError,setLoginError] =useState(false)

    const [login,setLogin] = useState(false)

    const navi = useNavigate()
    const [credentials,setCredentials] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    })


    const handleCredentials = (firstName,lastName,email,password) =>{
        setCredentials({
            firstName: firstName,
            lastName:lastName,
            email:email,
            password:password
        })
    }

    const handleLogin =(email,password) =>{

        if( credentials.email === email && credentials.password === password){
            setLogin(true)
            setLoginError(false)
            navi('/')

        }else{
            setLoginError(true)
        }
    }

    const handleLogout =()=>{
        setCredentials({
            firstName:'',
            lastName:'',
            email:'',
            password:'',
        })
        setLogin(false)
    }



    return(
        <AuthContext.Provider value={{

            credentials:credentials,
            handleCredentials:handleCredentials,
            handleLogin:handleLogin,
            loginError:loginError,
            login:login,
            handleLogout:handleLogout
        }}>
            {props.children}


        </AuthContext.Provider>
    )
}
export default AuthContext;