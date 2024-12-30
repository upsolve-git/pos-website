import axios from "../helpers/axios"

import { GET_AUTH_ENDPOINT } from "../constants/routes"

export const getAuth = async() => {
    return axios.get(GET_AUTH_ENDPOINT)
}