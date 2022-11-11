import Axios from "./caller.data.service";


let getManageableData = () => {
    return Axios.get('')
}
export const dataService = {
    getManageableData
}

