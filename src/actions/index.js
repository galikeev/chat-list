export const chatsFetching = () => {
    return {
        type: 'CHATS_FETCHING'
    };
};

export const chatsFetched = (chats) => {
    return {
        type: 'CHATS_FETCHED',
        payload: chats
    };
};

export const chatsFetchingError = () => {
    return {
        type: 'CHATS_FETCHING_ERROR'
    }
}

export const messagesFetching = () => {
    return {
        type: 'MESSAGES_FETCHING'
    }
}

export const messagesFetched = (messages) => {
    return {
        type: 'MESSAGES_FETCHED',
        payload: messages
    }
}

export const messagesFetchingError = () => {
    return {
        type: 'MESSAGES_FETCHING_ERROR'
    }
}