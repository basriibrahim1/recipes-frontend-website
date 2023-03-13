import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="bg-warning text-center d-flex justify-items-center align-items-center flex-column mt-5">
      <h3 className="pt-5">Eat, Cook, Repeat</h3>
      <h5 className="pt-5">Share your best recipe by uploading here !</h5>
      <div className="footer-product d-flex text-center justify-items-center align-items-center text-decoration-none">
        <p className="p-5"><a className='text-decoration-none text-black' href="/">Product</a></p>
        <p className="pe-5"><a className='text-decoration-none text-black' href="/">Company</a></p>
        <p className="pe-5"><a className='text-decoration-none text-black' href="/">Learn More</a></p>
        <p className="pe-5"><a className='text-decoration-none text-black' href="/">Get In Touch</a></p>
      </div>
    </div>
  </footer>
  )
}

export default Footer