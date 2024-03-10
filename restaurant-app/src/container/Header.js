import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({count}) => {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark'>
                <a className='navbar-brand'>Restaurant</a>
                <Link to='/orders'  className='btn btn-primary' style={{color:'white',textDecoration:'none'}}>Orders<span className='badge bg-danger'>{count}</span></Link>
            </nav>
        </div>
    );
};

const mapStateToProps = state =>({
    count : state.orderReducer.length
})

export default connect(mapStateToProps)(Header);