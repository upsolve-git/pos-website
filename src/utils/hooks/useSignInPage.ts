import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { getAuthReq, googleAuthReq, loginReq, logoutReq } from "../../services/login";

import { isEmailValid } from "../../validations/emailValidation";
import { HOME_PAGE } from "../../constants/routes";

export const useSignInPage = ()=>{
    let [email, setEmail] = useState<string>('')
    let [emailErr, setEmailErr] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    let [accType, setAccType] = useState<string>('Personal')
    let [loginErr, setLoginErr] = useState<string>('')
    let [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    useEffect(() => {
      getAuth();
    }, []) 

    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
        if(!isEmailValid(e.target.value).res){
            setEmailErr(isEmailValid(e.target.value).err)
        }else{
            setEmailErr('')
        }
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }

    const handleAccTypeChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setAccType(e.target.value)
    }

    const checkValues = () => {
        return email === "" || password === "" || accType === ""
    }

    const getAuth = async() => {
        await getAuthReq()
        .then( res => {
            setIsAuthenticated(true);
        })
        .catch(err => {
            console.log("not authenticated")
            setIsAuthenticated(false);
        })
    }

    const loginHandler = async()=>{
        console.log(accType);
        
            console.log('log in');
            
            await loginReq(email, password)
            .then(res=>{
                console.log("inside signin success", res)
                setLoginErr('')
                navigate(HOME_PAGE)
            })
            .catch(err=>{
                console.log(err)
                setLoginErr("Error occured, Please try again")
            })

        // }
    }  

    const googleAuthHandler = async(user:any) => {
        await googleAuthReq(user.email, user.given_name, user.family_name)
        .then(res=>{
            console.log("inside signin success", res)
            setLoginErr('')
            navigate(HOME_PAGE)
        })
        .catch(err=>{
            console.log(err)
            setLoginErr("Error occured, Please try again")
        })
    } 

    const logoutHandler = async() => {
        await logoutReq()
        .then( res => {
            setIsAuthenticated(false);
            navigate(HOME_PAGE)
        })
        .catch(err => {
            console.log("not authenticated")
            setIsAuthenticated(false);
        })
    }

    return {logoutHandler, isAuthenticated, googleAuthHandler,email, emailErr, handleEmailChange, password, handlePasswordChange, accType, handleAccTypeChange, loginHandler, loginErr, checkValues}
}