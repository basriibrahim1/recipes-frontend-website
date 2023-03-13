import React from 'react'
import Footer from '../../../utils'
import Headers from '../../headers'
import NavbarComponent from '../../navbar/navbarMenu'
import { Link } from 'react-router-dom'

const LikedComponent = () => {
  return (
    <>
    < NavbarComponent />

    < Headers />

    <div className='container mb-5'>
    <div class="d-flex flex-lg-row flex-column align-items-center text-lg-start text-center mt-5">
        <img class="food-product" src="./Rectangle 328.png" alt="img" />
        <div class="product-ingredients ms-5">
          <h3>Bomb Chicken</h3>
          <p>Ingredients:</p>
          <p class="col-lg-5">chicken, dumpling wrap, garlic, spring onion, sauce, black sesame seed</p>
          <p class="bg-warning col-lg-7">10 Likes - 12 Comment - 3 Bookmark</p>
          <div class="d-flex justify-content-lg-start justify-content-center">
            <Link><button class="border-0 me-5 text-white bg-info">Edit</button></Link>
            <button class="border-0 bg-warning">Delete</button>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex text-center align-items-center justify-content-center mt-5 mb-5">
      <button class="border-0 bg-warning me-2 mt-5">Prev</button>
      <h5 class="mt-5">Show 6-10 From 10</h5>
    </div>

    <Footer />
  </>
  )
}

export default LikedComponent