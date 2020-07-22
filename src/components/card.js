import React from 'react';
import '../App.css';
 
 
const Card = ({item,handleClick}) => {

 

    return (

        <div className='card'>
              <div className='card-content'>
                <div className='top-bar'>
                  <span>
                    {item.price}Rs
                  </span>
                  <span className='float-right lnr lnr-heart'></span>
                </div>
                <div className='img'>
                  <img src={item.url} alt={item.name}/>
                </div>
              </div>
              <div className='card-description'>
                <div className='title'>
                {item.name}
                </div>
                <div className='cart'>
                  <button onClick={()=>handleClick(item.id)}
                  >< i className="fa fa-cart-plus fa-2x"   /></button>
                </div>
              </div>
              <div className='card-footer'>
                <div className='span'>
                  {item.categories}
                </div>
                
              </div>
            </div>
          
           
    );
};

export default Card;