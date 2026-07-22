import React from 'react'
import Hero from '../../components/Quality/Hero'
import Moderate from '../../components/Quality/Moderate'
import IndustriesServed from '../../components/Quality/industriesWeServed'
import ManufacturingProcess from '../../components/Quality/ManufacturingProcess'

function Quality() {
  return (
    <div className=''>
      <Hero/>
      <Moderate/>
     <IndustriesServed/>
     <ManufacturingProcess/>
    </div>
  )
}

export default Quality
