import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../Redux/IceCream/IceCreamAction'

function IceCreamContainer() {
    const iceCream = useSelector(state => state.iceCream.numberOfIceCream)
    const dispatch = useDispatch()
  return (
    <div>
        <h3>Number of IceCream = {iceCream}</h3>
        <button onClick={() => dispatch(buyIceCream())}>buy iceCream</button>
    </div>
  )
}

export default IceCreamContainer