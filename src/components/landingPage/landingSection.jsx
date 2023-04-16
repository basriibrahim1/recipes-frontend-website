import React from 'react'
import Image2 from '../../assets/lp2.png'
import './style.css'

const LandingSection = () => {
  return (
    <>
     <div>
          <h1 className="fw-bold border-start border-warning border-5 ps-5" style={{marginTop: '200px'}}>New Recipe</h1>
          <div className="d-flex flex-lg-row flex-column justify-content-lg-between align-items-center" style={{marginTop: '150px'}}>
            <div className="border-5 border-warning bg-warning border" style={{position: 'absolute', width: '500px', height: '500px', transform: 'translateX(-50px)', marginBottom: '100px'}}>-</div>
            <img className="lp1" style={{width: "500px", position: "relative"}} src={Image2} alt="" />
            <div className="col-lg-4 text-center mt-lg-0 mt-5">
              <h1 className="fw-bold">Healthy Bone Broth Ramen (Quick & Easy)</h1>
              <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That's right!</p>
              <button className="lp3 btn btn-warning border-0 rounded" style={{width: '200px', height: '50px'}}>Learn More</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default LandingSection