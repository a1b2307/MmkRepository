export const setTableNumber = (value) => async dispatch =>{
    dispatch({
        type : "SET_TABLE_NUMBER",
        payload : value
    })
}
export const resetTableNumber = () => async dispatch =>{
    dispatch({
        type:"RESET_TABLE_NUMBER"
    })
}
export const set_Filter = (value) => async dispatch =>{
    dispatch({
        type:"SET_FILTER",
        payload : value
    })
}
export const reset_Filter = () => async dispatch => {
    dispatch({
        type:"RESET_FILTER"
    })
}
export const addOrder = (id,name,prize,table_number,url) => async dispatch =>{
    dispatch({
        type : "ADD_ORDER",
        payload : {
            id : id,
            name : name,
            prize : prize,
            table_number : table_number,
            url : url
        }
    })
}