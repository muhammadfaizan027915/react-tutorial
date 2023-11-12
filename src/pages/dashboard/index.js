import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <Link to={'/dashboard/products'} >Go to Products</Link>
  )
}

export default Dashboard