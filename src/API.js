import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": 'f9d127b0-4021-4796-9b96-4d2b0150a62a' },
})

export const usersAPI = {
    getUsers(currentPage=1, pageSize=20) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    reloadUsers(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    authMe(){
        return instance.get( 'auth/me')
    },


}


