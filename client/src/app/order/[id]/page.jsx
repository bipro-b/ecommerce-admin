import React from 'react'
import Order from './Order'
function page({params}) {

  return (
    <div>
    <Order
    id={params.id}
    ></Order>
    </div>
  )
}

export default page