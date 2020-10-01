import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "fe15149f-b79e-4d26-a74a-8a6ca4b0ce0d"}
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                    return response.data
                }
            )
    },
    unFollow(id:string){
        return instance.delete(`follow/${id}`)
            .then(response=>{
                return response.data
            })
    },
    follow(id:string){
        return instance.post(`follow/${id}`)
            .then(response=>{
                return response.data
            })
    }
}


