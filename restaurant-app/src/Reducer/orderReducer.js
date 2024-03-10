const initialState = [];

export default function orderReducer(state=initialState,action){
    const {type,payload} = action;

    switch(type){
        case "ADD_ORDER":
            return [...state,payload]
        default:
            return state
    }
}