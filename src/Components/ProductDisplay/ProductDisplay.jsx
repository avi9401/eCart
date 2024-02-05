import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='proudctdisplay'>
        <div className="display-left">
            <div className="product-image-list">
                <img src={product.image} alt='items' />
                <img src={product.image} alt='items' />
                <img src={product.image} alt='items' />
                <img src={product.image} alt='items' />
            </div>
            <div className="product-image">
                <img className='product-main-img' src={product.image} alt='product' />
            </div>
        </div>
        <div className="display-right">
            <h1>{product.name}</h1>
            <div className="product-right-star">
                <img src={star_icon} alt='star' />
                <img src={star_icon} alt='star' />
                <img src={star_icon} alt='star' />
                <img src={star_icon} alt='star' />
                <img src={star_dull_icon} alt='star-dull' />
                <p>(122)</p>
            </div>
            <div className="proudctdisplay-right-prices">
                <div className="prodcustdisplay-old">
                    ${product.old_price}
                </div>
                <div className="prodcustdisplay-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-desc">
                Lightweight, Knitted, Close fitting Product.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="prodcustdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category: </span>Women, T-Shirt, Crop-Top</p>
            <p className='productdisplay-right-category'><span>Tags: </span>Modern, Latest</p>
        </div>

    </div>
  )
}

export default ProductDisplay