// package imports
import React, { useState } from "react";

// component imports
import FormCard from "../../ui/molecules/FormCard/FormCard";
import EmailInput from "../../ui/atoms/formElements/auth/EmailInput/EmailInput";
import PasswordInput from "../../ui/atoms/formElements/auth/PasswordInput/PasswordInput";
import AuthSubmitButton from "../../ui/atoms/buttons/ActionButton/AuthSubmitButton";
import GoogleAuthButton from "../../ui/atoms/buttons/GoogleAuthButton/GoogleAuthButton";

import { useNavigate } from 'react-router-dom';
import { adminLoginReq } from "../../services/login";
import { ADMIN_HOME } from "../../constants/routes";

interface AdminSignInPageProps{}

const AdminSignInPage: React.FC<AdminSignInPageProps> = ()=>{

    let [email, setEmail] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    const navigate = useNavigate();

    const handleAdminLogin = async() => {
        await adminLoginReq(email, password)
            .then(res=>{
                console.log("inside signin success", res)
                navigate(ADMIN_HOME)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    
    return (
        <div
        className="h-screen flex flex-col items-center justify-center">
            <FormCard>
                <div id="form-title-wrapper"
                className="flex flex-col items-center justify-center my-4">
                    <h1
                    className="text-lg font-medium tablet:text-xl desktop:text-2xl">
                        Log In
                    </h1>
                </div>
                <div id="input-container"
                className="my-3 w-full">
                    <EmailInput 
                    value={email}
                    error={""}
                    onChange={(e) => {setEmail(e.target.value)}}/>
                    <PasswordInput 
                    label="Password"
                    value={password}
                    errors={[]}
                    onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                <AuthSubmitButton 
                disabled={false}
                error={""}
                label="Login Now!"
                callbackFunc={handleAdminLogin}/>
            </FormCard>
        </div>
    )
}

export default AdminSignInPage