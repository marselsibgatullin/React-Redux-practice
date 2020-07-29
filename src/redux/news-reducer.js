const SET_POSTS = 'SET-POSTS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_NEWS_COUNT = 'SET-TOTAL-NEWS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    post: [ ],
    pageSize:7,
    totalNewsCount: 0,
    currentPage : 1,
    isFetching : false
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                post: action.post
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_NEWS_COUNT: {
            return {
                ...state,
                totalNewsCount: action.totalNewsCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;

    }
}

export const setPosts = (post) => ({type: SET_POSTS, post})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalNewsCount = (totalNewsCount) => ({type: SET_TOTAL_NEWS_COUNT, totalNewsCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default newsReducer;