import React from 'react'

const data = [
  {
    id: 1,
    name: 'Marie Doe',
    description: "I loved the service! I would definitely recommend it to my friends and family.",
  },
  {
    id: 2,
    name: 'Jane Doe',
    description: "I loved the service! I would definitely recommend it to my friends and family.",
  }
]

const Testimonials = () => {
  return (
    <section className='flex flex-col'>
      <h2 className="text-4xl font-montserrat-heading text-secondary text-center p-4">Testimonials</h2>
      <div className="flex justify-center gap-16 flex-wrap">
        {
          data.map((testimonial) => {
            return (
              <div key={testimonial.id} className="flex flex-col items-center p-4">
                <div className="avatar">
                  <div className="w-24 rounded-xl">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <p className="text-center text-2xl font-montserrat-heading text-secondary p-2">{testimonial.name}</p>
                <p className="text-center font-montserrat-body text-slate-500">{testimonial.description}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials