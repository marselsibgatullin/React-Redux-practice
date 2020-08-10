import * as axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7ccc1bce-71b5-4410-a323-ec4c7c3308fa"
    }
});


export const newsAPI = {
    getNews(currentPage, pageSize){
        return (
            axios.get(`http://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=5495a97e2ea541478caa583b30617675&page=${currentPage}&pageSize=${pageSize}`)
        )
    }
}
export const authAPI = {
    logMe(){
        return (
            instance.get(`auth/me`)
        )
    }
}

export const statusAPI = {
    getStatus(){
        return (
            instance.get(`profile/status/9597`)
        )
    },
    updateStatus(status){
        return(
            instance.put(`profile/status`,{status})
        )
    }
}