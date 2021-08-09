export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove after finished developing.....
    //  token: 'BQBdIcohge6Tt97DGa4b5gw2vULT2PPX1n_iyW84PuE6yrwgmzhvUjgSaspYk_XzTEHBBDAAYPh6OC7WtyLonhlAhRdwQFkGMqN0OzFOieIHJAUW3XYkvLS4u6kxBgP8pAnw6rOyP1iL4t-Y5dMQXukA_K2GiwR3TwlrDbgdSO4QUOAw',
};

const reducer = (state, action) => {
console.log(action);

// Action => type [playload]

switch(action.type){
    case 'SET_USER':
        return{
            ...state,
            user: action.user
        };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            };
            case 'SET_PLAYLISTS':
                return{
                    ...state,
                    playlists: action.token,
                };
                case 'SET_DISCOVER_WEEKLY':
                return{
                    ...state,
                    discover_weekly: action.discover_weekly,
                };
        default:
       
            return state;
}
}

export default reducer;