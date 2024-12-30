import React from "react";

interface AuthSubmitButtonProps {
    disabled : boolean
    error: string;
    label: string;
    callbackFunc: () => void;
}

const AuthSubmitButton: React.FC<AuthSubmitButtonProps> = ({ disabled, error, label, callbackFunc }) => {
    return (
        <div className="w-full">
            {/* Button */}
            <button
                disabled= {disabled}
                onClick={callbackFunc}
                className="w-full h-fit py-2 bg-primary text-white rounded-3xl text-xs mt-1 mb-1 tablet:text-sm"
            >
                {label}
            </button>

            {/* Error Message */}
            {error && (
                <p
                className="text-red text-center block text-xxs tablet:text-xs desktop:text-sm">{error}</p>
            )}
        </div>
    );
}

export default AuthSubmitButton;