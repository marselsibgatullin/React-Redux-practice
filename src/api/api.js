import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "577adcc0-3362-4457-b9b9-1f15d1fa071b"
    }
});


export const newsAPI = {
    getNews(currentPage, pageSize) {
        return (
            axios.get(`http://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=5495a97e2ea541478caa583b30617675&page=${currentPage}&pageSize=${pageSize}`)
        )
    }
}
export const authAPI = {
    authMe() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}


export const statusAPI = {
    getStatus() {
        return (
            instance.get(`profile/status/9597`)
        )
    },
    updateStatus(status) {
        return (
            instance.put(`profile/status`, {status})
        )
    }
}