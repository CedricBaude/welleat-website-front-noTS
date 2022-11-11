import axios from "axios";
import { accountService } from "./account.service";

const AxiosTest = axios.create({
    baseURL: 'http://localhost:5000/users'
})

/**
 * Intercepteur pour le token
 */
AxiosTest.interceptors.request.use(request => {

    if (accountService.isLogged()) {
        request.headers.Authorization = 'Bearer ' + accountService.getToken()
    }

    return request
})

export default AxiosTest;