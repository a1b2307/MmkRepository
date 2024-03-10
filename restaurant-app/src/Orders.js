import React from 'react';
import { connect } from 'react-redux';

const Orders = ({list}) => {
    return (
        <div style={{textAlign:"center"}}>
            <center>
                <h3>Your Orders..!</h3>
                {list.length > 0 ?
                  <div className='container'>
                    <div className='row'>
                        {list.map((item) => (
                            <div className='col-md-4' style={{padding:"5px"}} key={item.id}>
                                <div className='card' style={{width:"18rem",padding:"3px",borderRadius:"20px"}}>
                                <img src={item.url} className='card-img-top' style={{height:"200px",width:"18rem",borderRadius:"20px"}} alt='img'/>
                                <div className='card-body'>
                                    <div className='card-title'>{item.name}</div>
                                    <div className='card-text'>Billing Amount:Rs.{item.prize}</div>
                                    <p>Table Number:{item.table_number}</p>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                  </div>:
                  <div className='h4'>
                    No Order Placed Yet...!
                  </div>
                }
            </center>
        </div>
    );
};

const mapStateToProps = state =>({
    list : state.orderReducer
})

export default connect(mapStateToProps)(Orders);