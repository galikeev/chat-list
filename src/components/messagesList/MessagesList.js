import './messagesList.scss';

const MessagesList = ({messages}) => {

    const renderElems = messages.map(elem => {
        return elem.user.you ? 
            <div className="message__item message__item_you">
                {elem.message}
            </div> :
            <div className="message__item message__item_notyou">
                {elem.message}
            </div>
    })

    return (
        <div className="message">
            {renderElems}
        </div>
    );
};

export default MessagesList;