import axios from "../helpers/axios";
import { SIGNUP_ENDPOINT } from "../constants/routes";

export const signupReq = async (
    email: string | undefined,
    password: string | undefined,
    // accType: string | undefined,
    firstName: string | undefined,
    lastName: string | undefined,
    phone: string | undefined,
    countryCode: string | undefined,
    referralEmail: string
) => {
    if (email && password && firstName && lastName && phone && countryCode) {
        const requestBody: any = {
            "email": email,
            "password": password,
            "first_name": firstName,
            "last_name": lastName,
            "phone_number": phone,
            "referal_mail": referralEmail,
            "role": "user",
        };

        return axios.post(SIGNUP_ENDPOINT, requestBody);
    }
};
