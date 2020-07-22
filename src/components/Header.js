import React from 'react';
import { Link } from 'react-router-dom';
 
const Header = () => {
    return (
        <div className='header'>
        <div className='title'>
          <h4><Link to ="/" style={{textDecoration: 'none',  color: '#cacaca'}}>Shop</Link></h4>
          
                       
        <h4>Bag<Link to="/cart" style={{textDecoration: 'none', color: '#cacaca'}}><i className="fa fa-shopping-bag"/></Link></h4>
                   

        </div>
      </div>
    );
};

export default Header;