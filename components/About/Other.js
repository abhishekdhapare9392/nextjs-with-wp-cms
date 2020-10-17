import React from 'react'

const Other = ({ aboutData }) => {
  return (
    <section className='py-5 section'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-4 col-lg-4 col-sm col-xl-4'>
            <div className='card card-body shadow rounded-0 h-100'>
              <h3 className='text-center'>Objective</h3>
              <p>{aboutData.acf.objective}</p>
            </div>
          </div>
          <div className='col-12 col-md-4 col-lg-4 col-sm col-xl-4'>
            <div className='card card-body shadow rounded-0 h-100'>
              <h3 className='text-center'>Mission</h3>
              <p>{aboutData.acf.mission}</p>
            </div>
          </div>
          <div className='col-12 col-md-4 col-lg-4 col-sm col-xl-4'>
            <div className='card card-body shadow rounded-0 h-100'>
              <h3 className='text-center'>Vision</h3>
              <p>{aboutData.acf.vision}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Other
