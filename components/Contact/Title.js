import React from 'react'

const Title = ({ data }) => {
  // console.log(data)
  return (
    <section className='py-5 bg-secondary'>
      <div className='container'>
        <div className='title-container d-flex flex-column justify-content-center text-center'>
          <h2>{data.acf.title}</h2>
          <h6 style={{ color: 'rgba(250, 250, 250, 0.5)' }}>
            {data.acf.subtitle}
          </h6>
        </div>
      </div>
    </section>
  )
}

export default Title
