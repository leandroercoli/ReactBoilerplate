import { loginConstants } from '../constants'
import { loginService } from '../services'
import { constructors } from '../helpers'

export const loginActions = {
    updateStoredUser,
    tryLogin,
    logout
}

function requestLogin({ username, password }) { return { type: loginConstants.LOGIN_FETCH_REQUEST, payload: { username, password } } }
function success(response) { return { type: loginConstants.LOGIN_FETCH_SUCCESS, payload: response } }
function failure(error) { return { type: loginConstants.LOGIN_FETCH_FAILURE, payload: error } }

function updateStoredUser() {
    var username = "";
    const session = localStorage.getItem('session')
    if (session) {
        const sessionJson = JSON.parse(session)
        if (sessionJson && sessionJson.username) {
            username = sessionJson.username
        }
    }
    return { type: loginConstants.UPDATE_STORED_USER, payload: { username } }
}

function tryLogin({ username, password }) {
    return dispatch => {
        dispatch(requestLogin({ username, password }));
        return loginService.login({ username, password })
            .then(
                response => {
                    dispatch(success({ username, message: constructors.messageSuccess('Successful login.') }))
                    localStorage.setItem('session', JSON.stringify({ username, role: username }))
                },
                error => {
                    dispatch(failure({ message: constructors.messageError('Incorrect username or password.') }))
                })
    }
}

function logout() {
    loginService.logout()
    localStorage.removeItem('session')

    { return { type: loginConstants.UPDATE_STORED_USER, payload: { username: '' } } }
}