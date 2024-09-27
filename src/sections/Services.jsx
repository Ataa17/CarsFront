import React from 'react'

const services =[
    {
        title: "Vehicle Rentals",
        description: "We offer a wide range of vehicles for rent. From economy cars to luxary vehicles, we have it all.",
    },
    {
        title: "Insurance Coverage Options",
        description: "We offer a wide range of insurance coverage options to meet your needs.",
    },
    {
        title: "Roadside Assistance",
        description: "We offer 24/7 roadside assistance to all of our customers,providing peace of mind during the rental period.",
    },
    {
        title :"Online Booking and Mobile App Services",
        description: "We offer online booking and mobile app services to make renting a vehicle as easy as possible.",
    },
    {
        title:"Airport Pickup and Drop-off",
        description: "We offer airport pickup and drop-off services to make your trip as convenient as possible.",
    }, {
        title: "Driver Services",
        description: "We offer driver services to make your trip as comfortable as possible.",
    }
]

const Services = () => {
  return (
<section className='flex flex-col justify-center items-center'>
    <h1 className='font-montserrat-heading leading-normal text-secondary text-4xl'>Our Services</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
    {
        services.map((service) => (
            <div key={service.title} className='card card-normal rounded-lg bg-base-100 shadow-md'>
                <div className="card-body">
                    <h3 className='card-title'>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            </div>
        ))
    }
    </div>
    
</section>

    )
}

export default Services