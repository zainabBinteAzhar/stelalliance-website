import React from 'react'
import Hero from '../../components/hero/hero'
import Experts from '../../components/experts/experts'
import SoftwareSol from '../../components/softwareSol/softwareSol'
import Reviews from '../../components/reviews/reviews'
import Faqs from '../../components/faqs/faqs'
import "./landingPage.css"

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Hero/>
      <Experts/>
      <SoftwareSol/>
      <Reviews/>
      <Faqs/>
    </div>
  )
}

export default LandingPage
