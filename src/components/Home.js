import React  from 'react';
import { connect } from 'react-redux'
    
import Card from './card'
 
 
import {addToCart} from '../redux/actions/cartAction';
function Home( props) {
  const  handleClick = (id)=>{
    props.addToCart(id); 
   
    console.log(id);
 }

 
  return (
     
     <div className='body'>
       <h3 className="cat">Electronics</h3>
        <div className='container'>
      
          {props.items.filter(item=>item.categories==='Electronics').map((item)=>
            <Card item={item} handleClick={handleClick}  key={item.id}/>
           )}
  
     </div>
     <br/>
     <br/>
     <h3 className="cat">Fashion</h3>
     <div className='container'>
      
      {props.items.filter(item=>item.categories==='Fashion').map((item)=>
        <Card item={item} handleClick={handleClick}  key={item.id}/>
       )}

 </div>
     </div>
   
  );
}
const mapStateToProps = (state)=>{
  return {
    items: state.items,
    additems:state.additems
  }
}

const mapDispatchToProps= (dispatch)=>{
    
  return{
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
