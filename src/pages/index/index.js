import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatListService from '../../api/chat/index';

import { headerTitle } from "../../actions";

import ChatList from "../../components/chatList/ChatList";
import Header from "../../components/header/Header";
import MessagesList from "../../components/messagesList/MessagesList";
import Spinner from '../../components/spinner/Spinner';


const PageIndex = () => {

    const dispatch = useDispatch();

    const {getChatList, getMessagesList} = ChatListService();

    const {
        chats,
        statusChats,
        statusMessages,
        dialogTitle,
        messages
    } = useSelector(state => state);

    useEffect(() => {
        getChatList()
    }, []);
    
    const onChatSelected = (id) => {
        const chat = chats.find(elem => elem.id === id);
        dispatch(headerTitle(chat.title));
        getMessagesList(chat.id)
    }

    return (
        <div className="page">
            <div className="page__left">
                <h3 className="chats__title">All chats</h3>
                {statusChats === 'loading' ? <Spinner/> : <ChatList 
                    chatList={chats} 
                    onChatSelected={onChatSelected}/>}
            </div>
            <div className="page__wrapper">
                <Header header={dialogTitle}/>
                {statusMessages === 'loading' ? <Spinner/> : <MessagesList messages={messages}/>}
            </div>
        </div>
    )
}

export default PageIndex;