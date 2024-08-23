/*import React from 'react'
import './Popular.css'
import data_products from'../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular IN WOmen</h1>
      <hr/>
      <div className="popular_item">
        {data_product.map((item)=>{

          return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
*/

import React from 'react'
import './Popular.css'
import data_products from '../Assets/data'
import Item from '../Items/Item'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className="popular_item">
        {data_products.map((item,i) => {
          return (
            <Item 
              key={item.id} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price} 
            />
          )
        })}
      </div>
    </div>
  )
}

export default Popular
