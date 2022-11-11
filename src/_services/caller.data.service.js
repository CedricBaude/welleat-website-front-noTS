import axios from "axios";
import { accountService } from "./account.service";

const AxiosData = axios.create({
    baseURL: 'http://localhost:5000/data'
})

/**
 * Intercepteur pour le token
 */
AxiosData.interceptors.request.use(request => {

    if (accountService.isLogged()) {
        request.headers.Authorization = 'Bearer ' + accountService.getToken()
    }

    return request
})

export default AxiosData;