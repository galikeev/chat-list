import { useEffect, useState } from "react";

import { getChatList, getMessagesList } from "../../api/chat";

import ChatList from "../../components/chatList/ChatList";
import Header from "../../components/header/Header";
import MessagesList from "../../components/messagesList/MessagesList";


const PageIndex = () => {

    const [chatList, setChatList] = useState([]);
    const [messages, setMessages] = useState([]);
    const [header, setHeader] = useState('');

    useEffect(() => {
        getChatList()
            .then(onChatListLoaded)
    }, [])
    
    const onChatListLoaded = (chatList) => {
        setChatList(() => [...chatList]);
    }
    
    const onChatSelected = (id) => {
        const chat = chatList.find(elem => elem.id === id);
        setHeader(chat.title);
        getMessagesList(chat.id)
            .then(onMessagesLoaded)
    }

    const onMessagesLoaded = (messages) => {
        setMessages(() => [...messages]);
    }

    return (
        <div className="page">
            <ChatList 
                chatList={chatList} 
                onChatSelected={onChatSelected}/>
            <div className="page__wrapper">
                <Header header={header}/>
                <MessagesList messages={messages}/>
            </div>
        </div>
    )
}

export default PageIndex;