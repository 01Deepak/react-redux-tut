import React from 'react'
import { useSelector } from 'react-redux'

const CakeContainer = () => {
    const cakes = useSelector(state => state.numberOfCake)
  return (
    <div>
        <h2>Number of Cakes - {cakes}</h2>
        <button>buy</button>
    </div>
  )
}

export default CakeContainer