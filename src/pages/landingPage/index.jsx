import React from 'react'
import Footer from '../../utils'
import Popular1 from '../../assets/pop1.png'
import Popular2 from '../../assets/pop2.png'
import Popular3 from '../../assets/pop3.png'
import Popular5 from '../../assets/pop5.png'
import Popular6 from '../../assets/pop6.png'
import LandingHeader from '../../components/landingPage/landingHeader'
import LandingSection from '../../components/landingPage/landingSection'
import LandingContent from '../../components/landingPage/landingContent'
import NavbarLandingPage from '../../components/navbar/navbarLandingPage'

const LandingPage = () => {
  return (
    <>
        <div className='mt-5 ms-5'>
        <NavbarLandingPage />
        </div>
        

    <section>
      <div className="container" style={{marginTop: '100px'}}>
        <LandingHeader />
        <LandingSection />
        <div>
          <h1 className="fw-bold border-start border-warning border-5 ps-5" style={{marginTop: '200px'}}>Popular Recipes</h1>

          <div className="row col-12 text-center">
            <div className="col-xl-4 col-lg-6" style={{position: "relative"}}>
              <LandingContent image={Popular1} title='Chicken Kare'/>
            </div>
            <div className="col-xl-4 col-lg-6" style={{position: "relative"}}>
              <LandingContent image={Popular2} title='Bomb Chicken'/>
            </div>
            <div className="col-xl-4 col-lg-6" style={{position: "relative"}}>
              <LandingContent image={Popular3} title='Banana Smoothie Pop'/>
            </div>
            <div className="col-xl-4 col-lg-6" style={{position: "relative"}}>
              <LandingContent image={Popular3} title='Banana Smoothie Pop'/>
            </div>
            <div className="col-xl-4 col-lg-6" style={{position: "relative"}}>
              <LandingContent image={Popular5} title='Sugar Salmon'/>
            </div>
            <div className="col-xl-4 col-lg-6" style={{position: "relative"}}>
              <LandingContent image={Popular6} title='Indian Salad'/>
            </div>
          </div>
        </div>
      </div>
    </section>


        < Footer/>
    
    </>
  )
}

export default LandingPage