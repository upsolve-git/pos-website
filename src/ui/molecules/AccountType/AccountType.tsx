import React from "react";

import ChoiceRadioButton from "../../atoms/formElements/auth/ChoiceRadioButton/ChoiceRadioButton";

interface AccountTypeProps{}

const AccountType: React.FC<AccountTypeProps> = ()=>{
    return(
        <div
        className="grid grid-cols-1 gap-4 tablet:grid-cols-2 ">
            <ChoiceRadioButton 
            value="Personal"
            name="account-type"/>
            <ChoiceRadioButton
            value="Business"
            name="account-type"/>
        </div>
    )
}

export default AccountType