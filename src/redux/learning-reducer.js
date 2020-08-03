const SET_LINKS = 'SET-LINKS';

let initialState = {
    techsNames: [
        {id: 1, name: 'PHP', link: 'php'},
        {id: 2, name: 'JavaScript', link: 'js'},
        {id: 3, name: 'HTML', link: 'html'},
        {id: 4, name: 'CSS', link: 'css'}
    ],
    currentLink: [],
    techsLinks: {
        php: [
            {id: 1, name: 'PHP Framework', desc: 'Some description', img: ""},
            {id: 2, name: 'PHP Book', desc: 'Some description', img: ""},
            {id: 3, name: 'PHP Video', desc: 'Some description', img: ""}
        ],
        js: [
            {
                id: 4, name: 'JS Framework', desc: 'Some description',
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADDCAMAAACxkIT5AAAA4VBMVEX///8AAAD///3//v9i2vz8/////v3///z//f/9/v9i2v38//1h2/r8/v///fwuLi5VVVXQ0ND39/fw8PC+vr73///Kysp9fX1tbW2UlJS4uLiFhYVg3Pmtra3o6Oji4uLX19ft+/rg8/U8PDyOjo5ZWVln0e6Kz+Ri0vMdHR1ycnJoaGhISEi/6O+f1+bm+PhzzePO6e/G5+2o3OiQ0uaD0N/c7fB61+sRERGmpqYpKSmw5PCc2eNkzeKk1uV6yeBoy+7Y9vaM0ezF7e+z4+aR0eq14O6M3vCi3OS73ORBQUHE2ByyAAAPvElEQVR4nO1cCVvbSrJttXqR1LIhgFjFIiWRFYgl2bLJAsQwk+d7yf//Qe9U2xiTyeRm5iZD7K8PX2zjloSqupZT3aUw5uDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4LDKUCHj3GiWDadX/cuESRko7Ye+4tLvsoBpHhjOksv+1XSYMR2GmoXquW/650JyzSVj2fWNiOI4bT5dSq2hBWkHpOYdzVn+qUnTtCxvrjOOM7iSz33bPxWKacNUPUmFiKMI/8pRbro+Y2EQdqTPfG7yUYmRKCIdTXLFjJbrZQjcyI7OGsh/2zRNEadpXFSJDjpaG607HZ1UN5A9LZpJUwohmgwmAudYJ3CjQlOJVIzvMpkNqiaOIzEZsG7omyDkbNCIKI2bapAl2d0IHysj1ZrpAJbN6tsoGkultEZgaAsRiXIqTSgDY6YlLKRoM8a0CpS8hrnU5D3rBaPYvYiKmj3EuXoEJcAfWMBNhTAhRvV8RLG6iMQ9U2umA99wOY7FiCk1C3ShlPcFYmMv01kvSqPiPunMhjjjciQELMb4z3rPPx1GZY0QUxWYmQ78sMvumkggKEzSOJpcsgeRoQMymSZja6YDxXl2G5VIeQ8JT5uA1WOkyiIW8biGcvTDoZLnpbjN2HrRA8a7Oi/j4pJzNteBQqZgGZQQwSESY5TpztMAdHBZpNDXepkBpp0PSlHkTHXtr+DJIMSBym16yHkn1DLUMyXgFV+XA7ZeFAk6YIMygg7YfLJh+l2pk3EKM0jHmWTdrpzPOw+hgwg60M93u78EoEFFVFw+FEKqqyn+VyDGN8iLlTQSFdVMP4rsgI5dM4rEuF+TXA/hALm/o1kLsti7G0dR2oIxsnnKUAzxQIBKrJsODMuKuBxAvpmghoe6j5TQ1KwGcS77Ws5HwBIodtxk66YDiIeKCeQvZEpKsAOtOMXD24EMyEsQLg10gJJZIjeCH8RN5vP1CorIiUkvFi1oASTVRA6SiUiLIZNwgn4p4knCQwxwlBOKtZF4lyi+XsnRh12DAPfAkPDDYe+yAj1sLSOyMseVtKoiD5D/IFrN104Hkk2j+CYhEZOsHgzbMoqidw8AUyrb4aDOEmhAJUUaTxEy1ksHJDoRhEE2vKp6TVGWIo3jGAQpTlO8zn4pi6Z3fTXMBkQPFFvDoFgXaVoUkBiVEoQGOYpikYIkxYK+s++kleK2QKRAJc316lNFbnyf+zI0Sslk0PZEbMXGlIMXoDIcVW3b3t/jpa1GTRSncWHVA74Qi147SCTvmkCG3F/hFMHB/rRGhVBPxwUEh/xl2Yza4T+LOGrqpSMVldZR8c9hOyqKmUHExbhfS0oiXBq2sqHBcBlKLu+qpozJ1oGrHAyAVZB3oHxKhWHISMBADgsRXyMiJvkVdCCgsbi8re5wdAAm/dyi/LdQXb/T5XVF60WiLEZ9hPtPzNdqUKbpCMyAkqEGOCeCNILQA2a67FMcF/3rokTAjIuq5kEn0CsbHkPQwX5DUa8YDTPGWpE2CVfJJAIV1iGZgI2WtAUled0IMUl8ljREplg2nPlP0Veoq59Zkv8G1n2V4aYq41QUVW6/szmPs/s4Tu9RNVpKmCQJ07AG+Pw0FuU9cig5ir1Kfo0MIcpqtsguVzAoKB5kPUT4YlTP3TlporRimZ1vFfiQaVhNbppqyALfVxz2EU0yVsVxk9jjfZnDkUTcy7p2vXXVdKBsiYA81wwR2+fL5C1MO2vh90Pd6RqZjcqIyEE5ymhrTQ8QOlvUl+DQFrqr2fAG/tADv1zB9EjUvy3jaJyxx73T/BZ1wY2IR0wr4yfj1HIluAaOMkyjpEAQjKPb/OEEGcKWIhsf+MqFRYUyOL+JxCSTRsnZYrLvmzFcHvN+p2D6/hWIckRAyJhCUwHpCONiLANr9tyEfiKzCfyJmMKqGQLnXE4FraIG4AAPq0dsiDohghkgIuqMthdQKgh6bTIltY9YECEIDjmbJwJLEHN4x1T6q+YN1G8hJzEK4qdZLZmAKxS5CrW0SycLgBkwHvp5AdeYJE9WU0PSzEQGZsV0oH3JkiIWQ72kA2UU+4woWDFDxO9+SQVC3HOfG0Pilp/tSsvjaXqIQipRq9aXQgQoKdJo+ITg8YBDB2klfdpPfaKD6J4HqApklVoddJfOUrqPUJkof8X2YHUomZwIsIHlG5dB0qAaskFCs8tlX6CldEO+gPEmCZbrAxhHKiaIByvWl4JSr8vaOL29W7pvZLd+icJYjCSKhDBplnQAuY1CcsRoVPaftB6ou9s0amWgw5XbdOHURhA32ewzM36IJDmGu8OwB5qbjp6WqbAVdRSXV7oDZj2A+yBz9KRCbg1CcGQfVfW7lBoXfLaSKyooAMQkp+0TH2wfOR+mLtrbSPQoIsD5qQEnoqWkazIDX44icdtSRjVdaEkrieySw1xiIo6rxpRnSEaY4qaP+Q8ZdeDMuDI0kw5ZyJVOKkRIaKGsElRPIdhDLKZZIcCVqXMR/5ihulOMklU0AYLS2f+VaVqOcsyn6kDmhqIkXiOqmQwUc3f9ruhVdxglSjgh31EUAcEQcA6X+YhWlUbJyvHkBUKVfKJOO9TOCXEd1ETloKuGhSinLOwEXalt7ayU7yPoTzE8ZGpAm3LwHZ7cQQMopD/ZInNFEcKdhw2tohbjacbZJ9pOCgwRyJuah9pIVBKa+6wDO+H1DSiiVAFxyYrJbNojDaRUd672VkNo2/BotbgZXxWpaKVWaoAMOZJBV9GOE8oA/HAKiFFxqQNlphB8OkIcQO6khr1wlRVg0WF12yADIrThp80zJlUl0nKoJGSX0iARKt7hCIhRpTD/eWt7dmmJvWlrBM/nluDvg9qKsn6vKGfbC0XTq/qfwQOaeqnpSrK6wdjnz9UfjfUAWn8a90EuglXNCMswtFbAZD4dF1AB7Salwq40vxtfV207nU7btqrG76hZu4zTGAZDgXB8lUvaeV69pZNvwLdrKJq6T1EKlLAHQesGqd1zspspYrbHltIrtFQUTRrbvbZQdhQPnluAnwXUOxyZsciTu2k7boqCGpSpXCDLsLogwlwWzbiaDpK7QhQDhIZ1MIFHkDTTOGrAB6nXJL/MpwXi4h+j8Xg8GY/+QOVQTC8vaROKM53cRvEVuPE6hIJHIAOwkUhHsyxgNxauIyKN0gbGa4TLyh7F7c7aKKUejHBld9i+CdtcQu1nvgqlMbQNidIZVbLp+l1JFfU4YZKGOLWf/BlHPbl2OvB5Bpn7jPZZfU6CqhyswW4oDZAmmpw9bCpqnw1pQUGuWZOmYiorouJO2qm17NCXA2pMy6khMy4GMuD0NXxGdWglucge2vzXBRCtLmnBbNGI7SM0timo4IA2ZadyYfdURF+iqqrXSwMWl9SzvTS1ZPjXSJElkuI1aoKHRKhsz3ZcXj7LXf5aWHqgniwvaupZTOO0JzUSgpzVRopCRRHHg1VdOfp3gDQDu6C8XASrQNXUYlDkPlUFc28ge6Dl5cGz3OgvBKY5L6k0Nv7MEqQVtu5Zrjiu6SHYuRK4b/RlEZX56m0wfh/QQXYLH+dcaitZyPCeT6hLyz7XylBRzNpSNOnAPsuzFuXSEiS12KRTu/lCyZE2UwcNPb9xN04j0QzsM11WaMPZNKWFxTXjyphTWicCAbZloFLQSXsbp2UvQWBEdrhtwRNnEdO3z/aNUGs+7y3/bChu2JQe5vE7FCBDlE1jWiWoEq51UlHz/jiXzHZpdQw9yjNdN5pIDy0SWY57yawgzlqQQ1H0ZVcHuis/06KKfdaXDqWnnIpa8mC94gFSovH/RLXcy7OsHlTUtpz2LplPqRIecEmdS+lNNaizLB+Xafwn42vXsy07xjKiuGje3VAzCk27nHUowgUkGQa1oNy8a0AZ4knSNZ1VbEr8DhQ92q3riUjtkjEMv6qfHIB6gvpZY9vAHk1qlJeBv152IFUY+IYnnyZlLMpi0oIBLTfgKg3nz9umLIUom09ZaMIgXDN+IJVBNaACmQ3u74d5IqUx4XL+h4IM8mWO4QF8hIjUuv0XEEj6XPJOYDmxfaApCObtWrMCwpc+/ec4s4N1F1bB1+yxdwcHBwcHBwcHBwcHBwcHBwcHBwcHBweHBbbm+F9cK9z6Pbcg33ozfDz6+2p4M7/WxgFj35L2g/fib/+NX4FN73wPuPC8Lz9y+KuX3xnc8Pbm13r9zfHj31YH2/Z9a8Pb+YHD973vDG7MB7c97+xb47+vDk5mHz54B/Z963ThFFunM/2QYZ9s27fz7+tg7gFH3vGTa4X08Zs6sB0Mzx0lFjo4tjrYfg1//nJGX+y+JN+eCXOAT292aIKX7fzre1/o4MA7xOspxZrX9vL248EhdLA7M7cDmN+5R3/n1Lv4RaL9MBY62Pd2rRUfHR55HibtDDd9fPCevsXdbh5/eO/thAdf8OXjydtP/efBFxBoT0k479Xxnke+hsueHx95H5/qYNvbsCf9lJz0d7DpHb7YBc69I0bCkshnHiLfnjXcU+8VYy/sVNlbJl94nP5tO98LbHi7dK2d194HHGQVwXbo3H18AcPynuoAY6/w4UfC0K/F5jyfeef4ZWtu6PuYm1PSBqQ8InWQNOzVxdcx8V90MAd51Ym3Z79864Wh98Z6/uZXOsDVju3ffWZseh92dnYOjzdpvs688x3ChXdGY6e7H16SDr68X5jr05i49bUvHNLZxy/JeHa8I3stJJ5Ta2Mk+Fc62HrvfXzugMgecyN7icCw+zCRcInwnN4v6PY3NhaHP+rgdP/8fN/b3Ds/X9jCIh54CI7Hi2udnM1TzvHXOkACOfrF8v0IFjHxCAb/wvrtw8De2dwXXr5ZTNaSDr5sbr71XuJlESQXeeE1Phw+2sg37OCV1QHi7u9AGRY6eOWdwbb37efDAwhvQ8MJ3f4FjgnJe0/+JR585QtzHVxAQhtNgQ+Ij95HGw9eP+ggnJlf+ObjNoWK58aSDnZpAs8YzdtLCH8x+/aIXJsC1zZJ8hcxca6DfQqiG/bKu7O8QLbygib9hfWLM5syKfUgbPw+HOkDzRvl9MMDS3U3vFcvkOW8t6ekmovD4480g/ve4dnjyV/p4OMTnviCWNErj65/4nl7uOxLyAyqcPDig/cWOtixLnLx/N5w9HYeE083N/Hp7AvVfXRXJ0QTL7Zee+9htHsPlHHH85aqpic6CNn+5lwHu5uv8WmXciWpMGSndLG907dn9gq41O7brfDigtLN9ub+/0bS/wDbZ3OlsJMzukfUDJbunzwML9O6v7Di2bVCOmzpvNPT5zZ+BwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHB4e/wv8D+dZnQq6DqCgAAAAASUVORK5CYII="
            },
            {id: 5, name: 'JS Book', desc: 'Some description', img: ""},
            {id: 6, name: 'JS Video', desc: 'Some description', img: ""}
        ],
        html: [
            {id: 7, name: 'HTML Framework', desc: 'Some description', img: ""},
            {id: 8, name: 'HTML Book', desc: 'Some description', img: ""},
            {id: 9, name: 'HTML Video', desc: 'Some description', img: ""}
        ],
        css: [
            {id: 10, name: 'CSS Framework', desc: 'Some description', img: ""},
            {id: 11, name: 'CSS Book', desc: 'Some description', img: ""},
            {id: 12, name: 'CSS Video', desc: 'Some description', img: ""}
        ],
        empty: []
    }
}

const learningReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_LINKS: {
            return {
                ...state,
                currentLink: action.currentLink
            }
        }
        default:
            return state;
    }
}


export const setLinks = (currentLink) => ({type: SET_LINKS, currentLink})

export const setLinksContent = (techsNames, techsLinks) => {
    return (dispatch) => {
        if (techsNames === "css")
            dispatch(setLinks(techsLinks.css));
        else if (techsNames === "html")
            dispatch(setLinks(techsLinks.html));
        else if (techsNames === "js")
            dispatch(setLinks(techsLinks.js));
        else if (techsNames === "php")
            dispatch(setLinks(techsLinks.php));
        else dispatch(setLinks(techsLinks.empty));
    }
}


export default learningReducer;