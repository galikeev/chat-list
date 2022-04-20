import { useDispatch } from "react-redux";
import axios from "axios";

import {
    chatsFetching,
    chatsFetched,
    chatsFetchingError,
    messagesFetching,
    messagesFetched,
    messagesFetchingError
} from '../../actions/index';

import {URLS} from "../../constants/urls";

const ChatListService = () => {

    const dispatch = useDispatch();

    const getChatList = () => {
        dispatch(chatsFetching())
        const response = axios.get(`https://api.clout.one/test/${URLS.LIST}`);
        return response
            .then(data => {
                dispatch(chatsFetched(data.data.response))
            })
            .catch(error => {
                console.log(error)
                dispatch(chatsFetchingError(error))
            })
    }
    
    const getMessagesList = (url) => {
        dispatch(messagesFetching())
        const response = axios.get(`https://api.clout.one/test/message.get?chat_id=${url}&offset=0&limit=20`);
        return response
            .then(data => {
                dispatch(messagesFetched(data.data.response))
            }).catch(error => {
                console.log(error)
                dispatch(messagesFetchingError(error))
            })
    }

    return {
        getChatList,
        getMessagesList
    }
}

export default ChatListService;