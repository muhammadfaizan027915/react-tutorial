import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <>
        <Link to={'/dashboard/products/1'} >Product 1</Link> <br />
        <Link to={'/dashboard/products/2'} >Product 2</Link> <br />
        <Link to={'/dashboard/products/3'} >Product 3</Link> <br />
        <Link to={'/dashboard/products/4'} >Product 4</Link> <br />
        <Link to={'/dashboard/products/5'} >Product 5</Link> <br />
        <Link to={'/dashboard/products/6'} >Product 6</Link> <br />
    </>
  )
}

export default Products