import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addOrder, resetTableNumber, reset_Filter } from '../Actions';

const Card = ({filter_name,addOrder,table_number}) => {
    const [data,setData] = useState([]);
    const [clonedata,setClonedata] = useState([]);
    useEffect(() => {
        fetch("data.json",{headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }}).then(
            (response) => {
                return response.json();
            }
        ).then(
            (data) => {
                setData(data.items);
                setClonedata(data.items);
            }
        )
    },[])

    useEffect(() => {
        if(filter_name !== "All Items"){
            let specific = clonedata.filter(item => item.category === filter_name);
            setData(specific);
        }else{
            setData(clonedata);
        }
    },[filter_name])

    const Handler = async (id,name,prize,url) =>{
        if(table_number != null){
             await addOrder(id,name,prize,table_number,url);
             await resetTableNumber();
             await reset_Filter();
             alert("order placed Successfully..!");
        }else{
            alert("pleae select the table number..!");
        }
    }

    return (
        <div>
            <center>
                {data.length > 0 ?
                  <div className='container'>
                    <div className='row'>
                        {data.map((item) => (
                            <div className='col-md-4' style={{padding:"5px"}} key={item.id}>
                                <div className='card'style={{width:"18rem",padding:"3px",borderRadius:"20px"}}>
                                <img src={item.url} className='card-img-top' style={{height:"200px",width:"18rem",borderRadius:"20px"}} alt='img'/>
                                <div className='card-body'>
                                    <div className='card-title'>{item.name}</div>
                                    <div className='card-text'>Rs.{item.prize}</div>
                                    <button className='btn btn-primary' onClick={() => Handler(item.id,item.name,item.prize,item.url)}>Order</button>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                  </div>:
                  <div className='spinner-border text-primary'></div>
                }
            </center>
        </div>
    );
};

const mapStateToProps = state => ({
    filter_name : state.filterReducer.filter_name,
    table_number : state.tableReducer.table_number
})

export default connect(mapStateToProps,{addOrder})(Card);