import createHashHistory from "history/createHashHistory"

const getLoggedIn = ()=> JSON.parse(window.localStorage.getItem('loggedIn')) || false

const history = createHashHistory()

export { getLoggedIn, history }