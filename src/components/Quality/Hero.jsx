import React from 'react'

function Hero() {
  return (
   <div className='flex min-h-[300px] h-[42vh] w-full items-center justify-center bg-[url("/herobackground.png")] bg-cover bg-center px-6'>
   <div className='mx-auto w-full max-w-4xl'>
    <h1 className='text-center font-sans text-2xl font-bold text-white md:text-4xl'>Quality is Our Promise</h1>
    <h2 className='mt-4 text-center font-sans text-base font-semibold tracking-wide text-white md:text-xl'>At Neelam Print'o'Pack, quality connects our work with our customers' trust.</h2>
   </div>

   </div>
  )
}

export default Hero
