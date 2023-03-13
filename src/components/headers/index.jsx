import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Headers = () => {
  return (
    <>
    <div className="mt-5 container">
      <div className="d-flex flex-lg-row flex-column pt-4 justify-content-lg-between">
        <div className="border-img border-start border-5 border-warning ps-3 d-flex">
          <img className="profile-recipes me-3 mt-3" src="./Ellipse 128.png" alt="img" />
          <div className="d-flex flex-column pt-2 text-center">
            <p className=""><a className="text-decoration-none text-secondary" href="./detailMenu.html">Ayudia</a></p>
            <p className=""><a className="text-decoration-none text-black fw-bold" href="./login.html">10 Recipes</a></p>
          </div>
        </div>
        <div className="align-items-lg-end lg-d-flex text-lg-center text-lg-start text-center flex-column pt-2">
          <p>21 Februari 2023</p>
        </div>
      </div>
      <div className="d-flex mt-5 border-bottom border-warning border-3 w-50 pb-3 text-center">
        <div className="row col-12">
          <Link to='/profile/recipes' className="fw-bold fs-3 text-black col-lg-4 text-decoration-none recipes"><h2>Recipes</h2></Link>
          <Link to='/profile/bookmark' className="fw-semibold fs-3 text-black col-lg-4 text-decoration-none bookmarked"><h2>Bookmarked</h2></Link>
          <Link to='/profile/liked' className="fw-semibold fs-3 text-black col-lg-4 text-decoration-none liked"><h2>Liked</h2></Link>
        </div>
      </div>
    </div>
  </>
  )
}

export default Headers