import React from 'react'
import Footer from '../../utils'
import NavbarLandingPage from '../navbar/navbarLandingPage'
import Image1 from '../../assets/lp1.png'
import Image2 from '../../assets/lp2.png'
import Popular1 from '../../assets/pop1.png'
import Popular2 from '../../assets/pop2.png'
import Popular3 from '../../assets/pop3.png'
import Popular4 from '../../assets/pop4.png'
import Popular5 from '../../assets/pop5.png'
import Popular6 from '../../assets/pop6.png'

const LandingPageComponent = () => {
  return (
    <>
        <div className='mt-5 ms-5'>
        < NavbarLandingPage />
        </div>
        

    <section>
      <div className="container" style={{marginTop: '200px'}}>
        <div>
          <h1 className="fw-bold border-start border-warning border-5 ps-5 p-2">Popular For You!</h1>
          <div className="d-flex flex-lg-row flex-column justify-content-lg-between align-items-center" style={{marginTop: "150px"}}>
            <div className="border-lg-5 border-warning border" style={{position: 'absolute', width: '500px', height: '500px', transform: 'translateX(50px)', marginTop: '100px'}}>-</div>
            <img className="lp1" style={{width: '500px', position: 'relative'}} src={Image1} alt="" />
            <div className="col-lg-4 text-center mt-md-5">
              <h1 className="fw-bold mt-lg-0 mt-5">Healthy Bone Broth Ramen (Quick & Easy)</h1>
              <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That's right!</p>
              <button className="bg-warning border-0 rounded" style={{width: '200px', height: '50px'}}>Learn More</button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="fw-bold border-start border-warning border-5 ps-5" style={{marginTop: '200px'}}>New Recipe</h1>
          <div className="d-flex flex-lg-row flex-column justify-content-lg-between align-items-center" style={{marginTop: '150px'}}>
            <div className="border-5 border-warning bg-warning border" style={{position: 'absolute', width: '500px', height: '500px', transform: 'translateX(-50px)', marginBottom: '100px'}}>-</div>
            <img className="lp2" style={{width: "500px", position: "relative"}} src={Image2} alt="" />
            <div className="col-lg-4 text-center mt-lg-0 mt-5">
              <h1 className="fw-bold">Healthy Bone Broth Ramen (Quick & Easy)</h1>
              <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That's right!</p>
              <button className="bg-warning border-0 rounded" style={{width: '200px', height: '50px'}}>Learn More</button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="fw-bold border-start border-warning border-5 ps-5" style={{marginTop: '200px'}}>Popular Recipes</h1>

          <div className="row col-12 text-center">
            <div className="col-xl-4 col-lg-6" style={{position: "relative"}}>
              <img style={{width: '350px', margin: '30px'}} src={Popular1} alt="" />
              <span className="pop-text fs-4 col-lg-2 text-start position-absolute" style={{bottom: '50px', left: '60px'}}>Chicken Kare</span>
            </div>
            <div className="col-xl-4 col-lg-6" style={{position: "relative"}}>
              <img style={{width: '350px', margin: '30px'}} src={Popular2} alt="" />
              <span className="pop-text fs-4 col-lg-2 position-absolute" style={{bottom: '50px', left: '60px'}}>Bomb Chicken</span>
            </div>
            <div className="col-xl-4 col-lg-6" style={{position: "relative"}}>
              <img style={{width: '350px', margin: '30px'}} src={Popular3} alt="" />
              <span className="pop-text fs-4 col-lg-5 text-start position-absolute" style={{bottom: '50px', left: '60px'}}>Banana Smoothie Pop</span>
            </div>
            <div className="col-xl-4 col-lg-6" style={{position: "relative"}}>
              <img style={{width: '350px', margin: '30px'}} src={Popular4} alt="" />
              <span className="pop-text fs-4 col-lg-4 text-start position-absolute" style={{bottom: '50px', left: '60px'}}>Coffe Lava Cake</span>
            </div>
            <div className="col-xl-4 col-lg-6" style={{position: "relative"}}>
              <img style={{width: '350px', margin: '30px'}} src={Popular5} alt="" />
              <span className="pop-text fs-4 col-lg-2 text-start position-absolute" style={{bottom: '50px', left: '60px'}}>Sugar Salmon</span>
            </div>
            <div className="col-xl-4 col-lg-6" style={{position: "relative"}}>
              <img style={{width: '350px', margin: '30px'}} src={Popular6} alt="" />
              <span className="pop-text fs-4 col-lg-2 text-start position-absolute" style={{bottom: '50px', left: '60px'}}>Indian Salad</span>
            </div>
          </div>
        </div>
      </div>
    </section>


        < Footer/>
    
    </>
  )
}

export default LandingPageComponent