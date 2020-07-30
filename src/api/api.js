import * as axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    baseURL: '',
    headers: {
        "API-KEY": ""
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
            instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
        )
    }
}