const initialState = {
    chats: [],
    statusChats: 'complete',
    statusMessages: 'complete',
    messages: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHATS_FETCHING':
            return {
                ...state,
                statusChats: 'loading',
            }
        case 'CHATS_FETCHED':
            return {
                ...state,
                chats: action.payload,
                statusChats: 'complete'
            }
        case 'CHATS_FETCHING_ERROR':
            return {
                ...state,
                statusChats: 'error'
            }
        case 'MESSAGES_FETCHING':
            return {
                ...state,
                statusMessages: 'loading'
            }
        case 'MESSAGES_FETCHED':
            return {
                ...state,
                status: 'complete',
                statusMessages: action.payload
            }
        case 'MESSAGES_FETCHING_ERROR':
            return {
                ...state,
                statusMessages: 'error'
            }
        default: return state
    }
}

export default reducer;