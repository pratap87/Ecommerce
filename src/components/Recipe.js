import React, { Component } from 'react'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
 import { toast } from 'react-toastify';


 toast.configure();
 
//import { addShipping } from './actions/cartActions'
class Recipe extends Component{
    
    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }


    handleToken=async(token,addresses)=>{
        const amount=this.props.total;
     const response= await  axios.post('http://localhost:8080/checkout',{
            token ,amount

        });
        const{status}=response.data;
       if(status==='success')
       {
           toast('Payment Successfull ! Check your email',
           {type:"success",
           
           autoClose:true,
           className:"toast"
            
        }
           
           )
       }
       else{
        toast('Payment Fail',
        {type:"error",position:"bottom-right"}
        )
       }
           
    }

    render(){
  
        return(
             
                    <div className="cho">
                        <br/>
                        <br/>
                            <h3>Card Total:{this.props.total}Rs</h3>
                                <h5><input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span></h5>
                         
                     
                    <hr
                    style={{color:'black',
             
                }}
                    />
                   
                        <button className="btnch">Checkout{" "} <i className="fa fa-lock"/> </button>
                            <br/>
                            <br/>
                         < StripeCheckout 
                         stripeKey="pk_test_51H7OZUB1S7sbvpZzRzPrMrBlXSGqUv5Yu4E4GjFiavOVNtfE8JuHOkFuxB5m0fPKI6hrsfNSRtXDwtFgG9ZyycKw007YNC8GYi"
                            token={this.handleToken}
                            billingAddress
                            
                            shippingAddress
                            amount={this.props.total*100}
                            currency="INR"
                            name="Your Total payable"
                             
                            
                       />
                        
                      
                  </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)