import React, { useState } from 'react';
import {connect} from 'react-redux';
import {setTableNumber} from '../Actions';

const Table = ({table_number,setTableNumber}) => {
    const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const inActiveBtn = 'btn btn-outline-primary m-2';
    const activeBtn = 'btn btn-outline-primary m-2 active';
    const [number,setNumber] = useState(null);
    return (
        <div>
            <center className='mt-3'>
                <h4>Please Select Your Table Number...</h4>
                {numbers.map((num,index) => (
                    <div style={{display:"inline"}} key={index}>
                        <button className={table_number===num?activeBtn:inActiveBtn} onClick={() => setTableNumber(num)}>{num}</button>
                    </div>
                ))}
            </center>
        </div>
    );
};

const mapStateToProps = state =>({
    table_number : state.tableReducer.table_number
})

export default connect(mapStateToProps,{setTableNumber})(Table);