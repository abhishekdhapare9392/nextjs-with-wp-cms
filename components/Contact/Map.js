import React from 'react'

const Map = ({ data }) => {
  return (
    <>
      <section className='section'>
        <div className='row'>
          <div className='col-12 col-md-12 col-sm col-lg-12 col-xl-12'>
            <div
              dangerouslySetInnerHTML={{ __html: data.acf.embedded_map }}
            ></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Map
