import Avatar from "../avatar/Avatar";

import './chatItem.scss';

const ChatItem = ({avatar, last_message, title, users, onChatSelected}) => {
    return (
        <div className="chat" onClick={onChatSelected}>
            <Avatar link={avatar} name={title}/>
            <div>
                <h4 className="chat__title">{title}</h4>
                <div className="chat__message">{last_message.message.substring(0, 38) + '...'}</div>
            </div>
        </div>
    );
};

export default ChatItem;