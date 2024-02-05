import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from  '../Assets/cart_cross_icon.png'

export const CartItems = () => {

    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);

  return (
    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
       {all_product.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return  <div key={e.id}>
            <div className='cartitems-format cartitems-format-main'>
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}}  alt="" />
            </div>
            <hr />
        </div>
        }
        return null;
       })}
       <div className='cartitems-down'>
         <div className='cartitems-total'>
            <h1>cart total</h1>
            <div>
                <div className='cartitems-total-items'>
                <p>Sub total</p>
                <p>${getTotalCartAmount()}</p>

                </div>
                <hr />
                <div className='cartitems-total-items'>
                <p>Shipping Fee</p>
                <p>Free</p>

                </div>
                <hr />
                <div className='cartitems-total-items'>
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>

                </div>
            </div>
            <button>Proceed To Checkout</button>
         </div>
         <div className='Promo'>
          <p>Add Code</p>
          <div className='promo-box'>
           <input type="text" placeholder='Promo Code' />
           <button>Submit</button>

          </div>

         </div>

       </div>

    </div>
  )
}