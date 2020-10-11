import axios from "axios";

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
    unFollow(id: string) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    follow(id: string) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}

const testinstance = axios.create({
    headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "10e0cf49a1msh3eed3506720343fp142f02jsn8d98ae559127"
    }
})

export const weather = {
    getWeather() {
        return testinstance.get(`https://community-open-weather-map.p.rapidapi.com/weather?lat=55.75396&lon=37.620393&callback=test&id=2172797&lang=null&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=Moscow`)
    }
}


