import React from 'react'
import './Descriptionbox.css'


const DescriptionBox = () => {
  return (
    <div className='desc-box'>
    <div className="desc-box-nav">
        <div className="desc-box-navbox">
            Description
        </div>
        <div className="desc-box-navbox fade">
            Reviews (122)
        </div>
    </div>
    <div className="descbox-desc">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dicta nisi vitae dolores commodi doloremque iure? Cum asperiores quaerat, velit numquam quibusdam sequi error aspernatur officia facilis deleniti possimus obcaecati. </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maxime doloribus est in incidunt ipsa asperiores facere accusamus possimus saepe commodi, esse iste praesentium magni error quisquam molestias quis obcaecati?
        </p>
    </div>

    </div>
  )
}

export default DescriptionBox