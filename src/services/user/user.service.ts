import axiosInstance from "../../modules/axios/axios.module"

export function userService() {

    const postLogin = () => axiosInstance.post('session/new')
    return { }
}