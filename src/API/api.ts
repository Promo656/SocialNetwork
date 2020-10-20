import axios from "axios";
import logo from "../2863718.jpg"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "fe15149f-b79e-4d26-a74a-8a6ca4b0ce0d"}
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                    return response.data
                }
            )
    },
    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    getProfileId(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    },
    uploadPhoto(){
        return instance.put(`/profile/photo`, {image:logo})
            .then(response=>{
                return response
            })
    }

}


