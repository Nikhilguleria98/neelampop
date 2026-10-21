import React from 'react'
import Hero from '../../components/Quality/Hero'
import Moderate from '../../components/Quality/Moderate'
import IndustriesServed from '../../components/Quality/industriesWeServed'
import ManufacturingProcess from '../../components/Quality/ManufacturingProcess'
import QualityAssuranceCards from '../../components/Quality/QualityAssuranceCards'
import ComingSoonSlider from '../../components/home/ComingSoonTicker'

function Quality() {
  return (
    <div className=''>
      <Hero/>
      <Moderate/>
     <QualityAssuranceCards/>
     <IndustriesServed/>
     <ComingSoonSlider/>
     <ManufacturingProcess/>
    </div>
  )
}

export default Quality
