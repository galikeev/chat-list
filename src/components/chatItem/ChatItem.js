import dayjs from "dayjs";

import Avatar from "../avatar/Avatar";

import './chatItem.scss';

const ChatItem = ({avatar, last_message, title, onChatSelected}) => {

    const time = dayjs.unix(last_message.created_at).format('HH:mm');

    const titleLength = title.length > 20 ? title.substring(0, 21) + '...' : title;
    const messageLength = last_message.message.length > 45 ? last_message.message.substring(0, 45) + '...' : last_message.message;
    
    return (
        <div className="chat" onClick={onChatSelected}>
            <Avatar link={avatar} name={title}/>
            <div>
                <div className="chat__wrapper">
                    <h4 className="chat__title">{titleLength}</h4>
                    <div className="chat__time">{time}</div>
                </div>
                <div className="chat__message">{messageLength}</div>
            </div>
        </div>
    );
};

export default ChatItem;