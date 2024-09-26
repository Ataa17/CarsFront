import React from 'react'
import {Navbar} from '../components'
import {Hero, Testimonials, Services, Contact} from '../sections'
const Home = () => {
  return (
   <> 
   <header>
      <Navbar />

   </header>
   <main className='flex flex-col '>
      <section className="padding">
      <Hero />

      </section>
      <section className="padding">
      <Services />
      </section>
      <section className="padding">
      <Testimonials />
      </section>
      <section className="padding">
      <Contact />
      </section>
   </main>
   </>
  )
}

export default Home