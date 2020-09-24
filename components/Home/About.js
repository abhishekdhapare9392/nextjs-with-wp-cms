import React from 'react';

const About = ({ props }) => {
  const about = props.data.about;
  return (
    <div>
      <section className='section py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img className='w-100' src={about.about_image.url} />
            </div>
            <div className='col-md-6'>
              <h2>{about.title}</h2>
              <p style={{ textAlign: 'justify' }}>{about.excerpt}</p>
              <p style={{ textAlign: 'justify' }}>{about.excerpt}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
