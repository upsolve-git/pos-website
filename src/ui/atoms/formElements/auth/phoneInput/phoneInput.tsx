import React from "react";

interface PhoneInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    countryCode: string;
    onCountryCodeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
    value,
    onChange,
    countryCode,
    onCountryCodeChange
}) => {
    return (
        <div className="w-full h-fit my-2">
            <label htmlFor="signup-tel" className="text-darkgray block text-xxs tablet:text-xs desktop:text-sm">
                Phone Number
            </label>
            <div className="flex">
                <select
                    value={countryCode}
                    onChange={onCountryCodeChange}
                    className="border border-darkgray rounded-l-lg text-xxs px-[0.3rem] py-[0.1rem] tablet:text-xs tablet:px-[0.5rem] tablet:py-[0.3rem] desktop:text-sm"
                >
                    <option value="+1">+1 (Canada)</option>
                </select>
                <input
                    name="signup-tel"
                    type="tel"
                    value={value}
                    onChange={onChange}
                    className="border border-darkgray rounded-r-lg w-full text-xxs px-[0.3rem] py-[0.1rem] tablet:text-xs tablet:px-[0.5rem] tablet:py-[0.3rem] desktop:text-sm"
                    placeholder="Phone Number"
                />
            </div>
        </div>
    );
};

export default PhoneInput