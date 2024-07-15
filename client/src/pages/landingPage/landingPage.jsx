import React from 'react'
import Hero from '../../components/hero/hero'
import Faqs from '../../components/faqs/faqs'
import "./landingPage.css"

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Hero/>
      <Faqs/>
    </div>
  )
}

export default LandingPage
