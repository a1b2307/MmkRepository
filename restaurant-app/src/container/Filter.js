import React, { useState } from 'react';
import { connect } from 'react-redux';
import { set_Filter,reset_Filter } from '../Actions';

const Filter = ({set_Filter,reset_Filter,filter_name }) => {
    const prod = ["All Items","Rice Items","Pizza","Cold Drinks","Hot Drinks"];
    const [filter,setFilter] = useState("All Items");
    return (
        <div>
            <center className='mt-2'>
                <span className='h4 m-3'>Filter :</span>
                <select name='filter' className='p-1' onChange={(e) => set_Filter(e.target.value)}>
                    {prod.map((item,index) => (
                        <option value={item} key={index}>{item}</option>
                    ))}
                </select>
            </center>
        </div>
    );
};

const mapStateToProps = state =>({
    filter_name : state.filterReducer.filter_name
})

export default connect(mapStateToProps,{set_Filter,reset_Filter})(Filter);