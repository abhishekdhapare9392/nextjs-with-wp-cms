import React from 'react'
import Link from 'next/link'

function Services({ props }) {
  const services = props.data.services
  // console.log(props);
  return (
    <div>
      <section className='section py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 m-auto text-center'>
              <h2>{services.title}</h2>
              <p className='text-muted'>{services.subtitle}</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-3'>
              <div className='card card-body rounded-0 border-0 shadow text-center'>
                <i
                  className='fa fa-globe text-primary mb-3'
                  style={{ fontSize: '50px' }}
                ></i>
                <h4 className='text-primary mb-3'>
                  {services.service_section.service_one.title}
                </h4>
                <p>{services.service_section.service_one.content}</p>
                <Link href='/services#webDevelopment'>
                  <button className='btn btn-primary shadow-sm'>
                    Read More
                  </button>
                </Link>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card card-body rounded-0 border-0 shadow text-center'>
                <i
                  className='fa fa-mobile mb-3 text-primary'
                  style={{ fontSize: '50px' }}
                ></i>
                <h4 className='text-primary mb-3'>
                  {services.service_section.service_two.title}
                </h4>
                <p>{services.service_section.service_two.content}</p>
                <Link href='/services#mobilitySol'>
                  <button className='btn btn-primary shadow-sm'>
                    Read More
                  </button>
                </Link>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card card-body rounded-0 border-0 shadow text-center'>
                <i
                  className='fa fa-industry mb-3 text-primary'
                  style={{ fontSize: '50px' }}
                ></i>
                <h4 className='text-primary mb-3'>
                  {services.service_section.service_three.title}
                </h4>
                <p>{services.service_section.service_three.content}</p>
                <Link href='/services#productDev'>
                  <button className='btn btn-primary shadow-sm'>
                    Read More
                  </button>
                </Link>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card card-body rounded-0 border-0 shadow text-center'>
                <i
                  className='fa fa-university mb-3 text-primary'
                  style={{ fontSize: '50px' }}
                ></i>
                <h4 className='text-primary mb-3'>
                  {services.service_section.service_four.title}
                </h4>
                <p>{services.service_section.service_four.content}</p>
                <Link href='/services#bankSolution'>
                  <button className='btn btn-primary shadow-sm'>
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
    .card h4{
        font-size: 15px;
        font-weight: 900;
    }
  `}</style>
    </div>
  )
}

export default Services
