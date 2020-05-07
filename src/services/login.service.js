import { getFromServer, postToServer } from './helpers'
export const loginService = {
    login,
    logout
};

export async function login({ username, password }) {
    return true
    // TODO: implement this api call on server
    return await postToServer('/login', { username, password });
}

export async function logout() {
    return true;
    // TODO: implement this api call on server
    return await getFromServer('/logout');
}