import axios from "axios";

import {URLS} from "../../constants/urls";

export const getChatList = () => {
    const response = axios.get(`https://api.clout.one/test/${URLS.LIST}`);
    return response
        .then(data => {
            console.log(data.data.response)
            return data.data.response
        })
        .catch(error => {
            console.log(error)
        })
}

export const getMessagesList = (url) => {
    return axios.get(`https://api.clout.one/test/message.get?chat_id=${url}&offset=0&limit=20
        `).then(data => {
            console.log(data.data.response)
            return data.data.response
        }).catch(error => {
            console.log(error)
        })
}