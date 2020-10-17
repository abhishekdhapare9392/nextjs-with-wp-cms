import React from 'react'

const Title = ({ aboutData }) => {
  //   console.log(aboutData)
  return (
    <section className='py-5 bg-secondary'>
      <div className='container'>
        <div className='title-container d-flex flex-column justify-content-center text-center'>
          <h2>{aboutData.acf.title}</h2>
          <h6 style={{ color: 'rgba(250, 250, 250, 0.5)' }}>
            {aboutData.acf.subtitle}
          </h6>
        </div>
      </div>
    </section>
  )
}

export default Title
