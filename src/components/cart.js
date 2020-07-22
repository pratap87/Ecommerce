
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../redux/actions/cartAction'
import Recipe from './Recipe'
import './cart.css'
 
class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
            const addedItems=this.props.items.length?
            (
                    this.props.items.map(item=>{
                        return(
                            <div className="prod">
                             <img src={item.url} className="im" alt={item.name}/>
                          
                          <div className="name">
                            <h3>{item.name}</h3>
                            </div>
                            <div className="price">
                        <h3>{item.price}</h3>
                        </div>
                     <  h3> <Link to="/cart"><i className="fa fa-plus" onClick={()=>{this.handleAddQuantity(item.id)}}/></Link></h3>
                     <h3> {item.quantity}</h3
                        > 
                                      <h3> <Link to="/cart">
                                          
                                          <i className="fa fa-minus" onClick={()=>{this.handleSubtractQuantity(item.id)}}/>
                                          
                                          
                                          </Link></h3>   
                            </div>
                        )
                    })

            )
            
            :
             (
                <p>Nothing.</p>
             )
       return(
           
            <div className="cont">
                
                    <div className="cardt">

                        <div className="prod">
                            <h4>Product</h4>
                            <h4>Name</h4>
                            <h4>Price</h4>
                            <h4>Quantity</h4>
                        </div>

                        {addedItems}
                        </div>
                <div className="checkout">
                <Recipe />      
                </div>    
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)