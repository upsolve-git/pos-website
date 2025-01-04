import { useState } from "react";

import { isEmailValid } from "../../validations/emailValidation";
import { isPasswordValid } from "../../validations/passwordValidation";
import { signupReq } from "../../services/signup";
import { useNavigate } from 'react-router-dom';
import { LOGIN_PAGE } from "../../constants/routes";

export const useSignUpPage = ()=>{
    let [email, setEmail] = useState<string>('')
    let [emailErr, setEmailErr] = useState<string>('')
    let [phone, setPhone] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    let [passwordErr, setPasswordErr] = useState<string[]>([])
    let [confPassword, setConfPassword] = useState<string>('')
    let [confPasswordErr, setConfPasswordErr] = useState<string[]>([])
    let [accType, setAccType] = useState<string>('Personal')
    let [firstName, setFirstName] = useState<string>('')
    let [lastName, setLastName] = useState<string>('')
    let [countryCode, setCountryCode] = useState<string>('+1')
    let [signupErr, setSignupErr] = useState<string>('')

    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
        if(!isEmailValid(email).res){
            setEmailErr(isEmailValid(email).err)
        }else{
            setEmailErr('')
        }
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPhone(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
        if(isPasswordValid(password)){
            setPasswordErr(isPasswordValid(password))
        }else{
            setPasswordErr([])
        }
    }

    const handleConfPassword = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setConfPassword(e.target.value)
        if(confPassword===password){
            setConfPasswordErr(['Must match with password'])
        }else{
            setConfPasswordErr([])
        }
    }

    const handleAccTypeChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setAccType(e.target.value)
    }

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setLastName(e.target.value)
    } 

    const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>)=> {
        setCountryCode(e.target.value)
    }

    const checkValues = () => {
        return email === "" || password === "" || accType === "" || firstName === "" || lastName === "" || phone.length !== 10 || countryCode === ""
    }

    const signupHandler = async ()=>{ 
        console.log(email)
        console.log(password)
        console.log(accType)
        console.log(firstName)
        console.log(lastName)
        console.log(phone)
        console.log(countryCode)
        await signupReq(email, password, accType, firstName, lastName, phone, countryCode)
            .then(res=>{
                console.log("inside signup success", res)
                setSignupErr('')
                navigate(LOGIN_PAGE)
                
            })
            .catch(err=>{
                console.log(err)
                setSignupErr("Error occured, Please try again")
            }) 
    }

    return {email, emailErr, handleEmailChange, phone, handlePhoneChange, password, passwordErr, handlePasswordChange, confPassword, confPasswordErr, 
        handleConfPassword, accType, handleAccTypeChange, signupHandler, firstName, 
        handleFirstNameChange, lastName, handleLastNameChange, countryCode, handleCountryCodeChange,
        signupErr, checkValues}
}