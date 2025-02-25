import React from "react";

// components imports
import FormCard from "../../ui/molecules/FormCard/FormCard";
import EmailInput from "../../ui/atoms/formElements/auth/EmailInput/EmailInput";
import PasswordInput from "../../ui/atoms/formElements/auth/PasswordInput/PasswordInput";
import AuthSubmitButton from "../../ui/atoms/buttons/ActionButton/AuthSubmitButton";
import PhoneInput from "../../ui/atoms/formElements/auth/phoneInput/phoneInput";
import TextInput from "../../ui/atoms/formElements/auth/textInput/textInput";

//  hooks imports
import { useSignUpPage } from "../../utils/hooks/useSignUpPage";

interface SignUpPageProps {}

const SignUpPage: React.FC<SignUpPageProps> = () => {
    let { 
        email, emailErr, handleEmailChange,
        phone, handlePhoneChange,
        password, passwordErr, handlePasswordChange,
        confPassword, confPasswordErr, handleConfPassword,
        firstName, handleFirstNameChange,
        lastName, handleLastNameChange,
        countryCode, handleCountryCodeChange,
        referralEmail, referralEmailErr, handleReferralEmailChange, // Referral email added
        signupErr, checkValues, signupHandler
    } = useSignUpPage();

    return (
        <div className="h-fit flex flex-col items-center justify-center">
            <FormCard>
                <div id="form-title-wrapper" className="flex flex-col items-center justify-center my-4">
                    <h1 className="text-md font-manrope font-medium tablet:text-xl desktop:text-2xl">
                        Create an account
                    </h1>
                    <p className="text-xxs tablet:text-xs desktop:text-sm">
                        Already have an account?
                        <a href="/auth/sign-in" className="underline ml-1">Sign In</a>
                    </p>
                </div>
                
                <div id="input-container" className="my-3 w-full">
                    <EmailInput value={email} error={emailErr} onChange={handleEmailChange} />
                    <TextInput label="First Name" value={firstName} onChange={handleFirstNameChange} />
                    <TextInput label="Last Name" value={lastName} onChange={handleLastNameChange} />
                    <PhoneInput value={phone} onChange={handlePhoneChange} countryCode={countryCode} onCountryCodeChange={handleCountryCodeChange} />
                    <PasswordInput label="Password" value={password} errors={passwordErr} onChange={handlePasswordChange} />
                    <PasswordInput label="Confirm Password" value={confPassword} errors={confPasswordErr} onChange={handleConfPassword} />
                    
                    {/* Optional Referral Email Field with Error Handling */}
                    <EmailInput 
                        value={referralEmail} 
                        label="Referral Email (Optional)" 
                        error={referralEmailErr}  // Shows error if referral email is invalid
                        onChange={handleReferralEmailChange} 
                    />
                </div>
                
                <AuthSubmitButton disabled={checkValues()} error={signupErr} label="Continue" callbackFunc={signupHandler} />
            </FormCard>
        </div>
    );
};

export default SignUpPage;