import React from 'react'

const About = ({ aboutData }) => {
  return (
    <section className='section py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 col-sm col-xl-6'>
            <img className='w-100' src={aboutData.acf.about_image.url} />
          </div>
          <div className='col-12 col-md-6 col-sm col-xl-6'>
            <p>{aboutData.acf.about_text}</p>
            <p>{aboutData.acf.about_text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
