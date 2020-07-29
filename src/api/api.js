import * as axios from "axios";


export const getNews = (currentPage, pageSize) => {
    return (
        axios.get(`http://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=5495a97e2ea541478caa583b30617675&page=${currentPage}&pageSize=${pageSize}`)
    )
}
export const authMe = () => {
    return (
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                withCredentials: true
            })
    )
}