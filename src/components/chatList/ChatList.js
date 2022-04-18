import ChatItem from "../chatItem/ChatItem";

import './chatList.scss';

const ChatList = ({chatList, onChatSelected}) => {
    
    const renderElems = chatList.map((item, i) => {
        const {id, ...elemProps} = item;
        return (
            <ChatItem
                key={id}
                {...elemProps}
                onChatSelected={() => onChatSelected(id)}
                />
        )
    })

    return (
        <div className="chats">
            <h3 className="chats__title">All chats</h3>
            {renderElems}
        </div>
    );
};

export default ChatList;