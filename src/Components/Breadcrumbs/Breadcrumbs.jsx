import React from 'react'
import './Breadcrumbs.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrumbs = (props) => {

    const {product} = props;
    const cat = product.category

  return (
    <div className='breadcrumb'>
        HOME <img src={arrow_icon} alt='icon' />
        SHOP <img src={arrow_icon} alt='icon' />
        {cat.toUpperCase()}
        <img src={arrow_icon} alt='icon' />
        {product.name}

    </div>
  )
}

export default Breadcrumbs