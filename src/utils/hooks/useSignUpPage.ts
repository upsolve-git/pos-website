import { useState } from "react";
import { isEmailValid } from "../../validations/emailValidation";
import { isPasswordValid } from "../../validations/passwordValidation";
import { signupReq } from "../../services/signup";
import { useNavigate } from "react-router-dom";
import { LOGIN_PAGE } from "../../constants/routes";

export const useSignUpPage = () => {
    let [email, setEmail] = useState<string>("");
    let [emailErr, setEmailErr] = useState<string>("");
    let [phone, setPhone] = useState<string>("");
    let [password, setPassword] = useState<string>("");
    let [passwordErr, setPasswordErr] = useState<string[]>([]);
    let [confPassword, setConfPassword] = useState<string>("");
    let [confPasswordErr, setConfPasswordErr] = useState<string[]>([]);
    let [firstName, setFirstName] = useState<string>("");
    let [lastName, setLastName] = useState<string>("");
    let [countryCode, setCountryCode] = useState<string>("+1");
    let [signupErr, setSignupErr] = useState<string>("");
    
    // Referral Email (Optional) with Validation
    let [referralEmail, setReferralEmail] = useState<string>("");
    let [referralEmailErr, setReferralEmailErr] = useState<string>("");

    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (!isEmailValid(e.target.value).res) {
            setEmailErr(isEmailValid(e.target.value).err);
        } else {
            setEmailErr("");
        }
    };

    const handleReferralEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReferralEmail(e.target.value);
        if (e.target.value && !isEmailValid(e.target.value).res) {
            setReferralEmailErr("Invalid email format");
        } else {
            setReferralEmailErr("");
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        let passwordValidation = isPasswordValid(e.target.value);
        setPasswordErr(passwordValidation.length ? passwordValidation : []);
    };

    const handleConfPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfPassword(e.target.value);
        setConfPasswordErr(e.target.value !== password ? ["Must match with password"] : []);
    };

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCountryCode(e.target.value);
    };

    const checkValues = () => {
        return (
            email === "" || password === "" || firstName === "" || lastName === "" || 
            phone.length !== 10 || countryCode === "" || referralEmailErr !== ""
        );
    };

    const signupHandler = async () => {
        console.log({ email, password, firstName, lastName, phone, countryCode, referralEmail });

        await signupReq(email, password, firstName, lastName, phone, countryCode, referralEmail)
            .then(res => {
                console.log("Signup successful:", res);
                setSignupErr("");
                navigate(LOGIN_PAGE);
            })
            .catch(err => {
                console.log(err);
                setSignupErr("Error occurred, Please try again");
            });
    };

    return {
        email, emailErr, handleEmailChange,
        phone, handlePhoneChange,
        password, passwordErr, handlePasswordChange,
        confPassword, confPasswordErr, handleConfPassword,
        firstName, handleFirstNameChange,
        lastName, handleLastNameChange,
        countryCode, handleCountryCodeChange,
        referralEmail, referralEmailErr, handleReferralEmailChange, // Referral email error state added
        signupErr, checkValues, signupHandler
    };
};
