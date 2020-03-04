import axios from "axios";
import {GET_SESSION_ID} from '../shared/storage'
const baseUrl = "http://157.245.74.109:8089";

export async function  GET_SERVICE (endpoint) {
    const url = baseUrl + endpoint;
    const headers = await setHeaders();

    try {
        return await axios.get(url, {headers});
    } catch (error) {
        return error.response;
    }
}


export async function  PATCH_SERVICE (endpoint) {
    const url = baseUrl + endpoint;
    const headers = await setHeaders();

    try {
        return await axios.patch(url, {headers});
    } catch (error) {
        return error.response;
    }
}


export async function  DELETE_SERVICE (endpoint) {
    const url = baseUrl + endpoint;
    const headers = await setHeaders();

    try {
        return await axios.delete(url, {headers});
    } catch (error) {
        return error.response;
    }
}

export async function POST_SERVICE(body, endpoint) {
    const url = baseUrl + endpoint;
    const headers = await setHeaders();

    try {
        return await axios.post(url, body, {headers});
    } catch (e) {
        return e.response;
    }
}

async function setHeaders() {
    const sessionId = await GET_SESSION_ID();
    let headers;

    if (sessionId)
    {
        headers =
        {
            'Authorization': 'Bearer ' + sessionId,
            'Content-Type': 'application/json',
        };
    }
    else
    {
        headers = {'Content-Type': 'application/json'};
    }

    return headers;
}
