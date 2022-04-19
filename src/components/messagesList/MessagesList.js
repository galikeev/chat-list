import dayjs from "dayjs";

import { ReadMessage } from "../../assets";
import './messagesList.scss';

const MessagesList = ({messages}) => {

    const renderElems = messages.map(elem => {

        const time = dayjs.unix(elem.created_at).format('HH:mm');

        return (
            elem.user.you ? 
            <div key={elem.id} className="message__item message__item_you">
                {elem.message}
                <div className="message__time">
                    <div>{time}</div>
                    <img src={ReadMessage} alt="icon"/>
                </div>
            </div> :
            <div key={elem.id} className="message__wrapper">
                <img src={elem.user.avatar} alt={elem.user.name} className="message__img"/>
                <div className="message__block">
                    {elem.user.name} {elem.user.surname}
                    <div className="message__item message__item_notyou">
                        {elem.message}
                        <div className="message__time">{time}</div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="message">
            {renderElems}
        </div>
    );
};

export default MessagesList;