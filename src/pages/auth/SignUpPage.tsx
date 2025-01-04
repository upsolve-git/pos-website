// package imports
import React from "react";

// components imports
import FormCard from "../../ui/molecules/FormCard/FormCard";
import AccountType from "../../ui/molecules/AccountType/AccountType";
import EmailInput from "../../ui/atoms/formElements/auth/EmailInput/EmailInput";
import PasswordInput from "../../ui/atoms/formElements/auth/PasswordInput/PasswordInput";
import AuthSubmitButton from "../../ui/atoms/buttons/ActionButton/AuthSubmitButton";
import GoogleAuthButton from "../../ui/atoms/buttons/GoogleAuthButton/GoogleAuthButton";
import PhoneInput from "../../ui/atoms/formElements/auth/phoneInput/phoneInput";
import TextInput from "../../ui/atoms/formElements/auth/textInput/textInput";

//  hooks imports
import { useSignUpPage } from "../../utils/hooks/useSignUpPage";
// import { AccTypeContext } from "../../utils/hooks/useAccTypeContext";

interface SignUpPageProps { }

const SignUpPage: React.FC<SignUpPageProps> = () => {

    let { email,
        emailErr,
        handleEmailChange,
        phone,
        handlePhoneChange,
        password,
        passwordErr,
        handlePasswordChange,
        confPassword,
        confPasswordErr,
        handleConfPassword,
        signupHandler,
        firstName,
        handleFirstNameChange,
        lastName,
        handleLastNameChange,
        countryCode,
        handleCountryCodeChange,
        signupErr,
        checkValues
    } = useSignUpPage()

    return (
        <div
            className="h-fit flex flex-col items-center justify-center">
            <FormCard>
                <div id="form-title-wrapper"
                    className="flex flex-col items-center justify-center my-4">
                    <h1
                        className="text-md font-manrope font-medium tablet:text-xl desktop:text-2xl">
                        Create an account
                    </h1>
                    <p
                        className="text-xxs tablet:text-xs desktop:text-sm">
                        Already have an account?
                        <a href="/auth/sign-in"
                            className="underline ml-1">Sign In</a>
                    </p>
                </div>
                {/* <AccTypeContext.Provider value={{ accType, handleAccTypeChange }}>
                    <AccountType />
                </AccTypeContext.Provider> */}
                <div id="input-container"
                    className="my-3 w-full">
                    <EmailInput
                        value={email}
                        error={emailErr}
                        onChange={handleEmailChange} />
                    <TextInput
                        label="First Name"
                        value={firstName}
                        onChange={handleFirstNameChange} />
                    <TextInput
                        label="Last Name"
                        value={lastName}
                        onChange={handleLastNameChange} />
                    <PhoneInput
                        value={phone}
                        onChange={handlePhoneChange}
                        countryCode={countryCode}
                        onCountryCodeChange={handleCountryCodeChange} />
                    <PasswordInput
                        label="Password"
                        value={password}
                        errors={passwordErr}
                        onChange={handlePasswordChange} />
                    <PasswordInput
                        label="Confirm Password"
                        value={confPassword}
                        errors={confPasswordErr}
                        onChange={handleConfPassword} />
                </div>
                <AuthSubmitButton
                    disabled={checkValues()}
                    error={signupErr}
                    label="Continue"
                    callbackFunc={signupHandler} />
                {/* <p
                    className="text-darkgray block text-xs">or continue with </p>
                <GoogleAuthButton /> */}
            </FormCard>
        </div>
    )
}

export default SignUpPage