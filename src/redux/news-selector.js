export const getPosts = (state) => {
    return state.newsPage.post;
}

export const getPageSize = (state) => {
    return state.newsPage.pageSize;
}

export const getTotalNewsCount = (state) => {
    return state.newsPage.totalNewsCount;
}

export const getCurrentPage = (state) => {
    return state.newsPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.newsPage.isFetching;
}