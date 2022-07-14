import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../Redux/Cake/CakeAction'

const CakeContainer = () => {
    const cakes = useSelector(state => state.numberOfCake)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of Cakes - {cakes}</h2>
        <button onClick={() => dispatch(buyCake())}>buy</button>
    </div>
  )
}

export default CakeContainer