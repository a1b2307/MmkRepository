const initialState = {
    table_number : null
}

export default function table(state=initialState,action){
    const {type,payload} = action;
    switch(type){
        case "SET_TABLE_NUMBER" :
            return {...state,table_number:payload}
        case "RESET_TABLE_NUMBER" :
            return {...state,table_number:null}
        default:
            return state
    }
}