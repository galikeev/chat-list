const initialState = {
    chats: [],
    statusChats: 'complete',
    statusMessages: 'complete',
    dialogTitle: '',
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
                statusMessages: 'complete',
                messages: action.payload
            }
        case 'MESSAGES_FETCHING_ERROR':
            return {
                ...state,
                statusMessages: 'error'
            }
        case 'DIALOG_TITLE':
            return {
                ...state,
                dialogTitle: action.payload
            }
        default: return state
    }
}

export default reducer;