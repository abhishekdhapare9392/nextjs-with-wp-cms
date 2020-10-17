import React from 'react';

const Slider = ({ props }) => {
  //   console.log(props.data);

  const slider = props.data.slider;
  //   console.log(props.data.slider);
  return (
    <div>
      <div
        id='carouselExampleControls'
        className='carousel slide'
        data-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src={slider.first_image.url}
              className='d-block w-100'
              alt='homePage.first_image_name'
            />
          </div>
          <div className='carousel-item'>
            <img
              src={slider.second_image.url}
              className='d-block w-100'
              alt='homePage.second_image_name'
            />
          </div>
          <div className='carousel-item'>
            <img
              src={slider.third_image.url}
              className='d-block w-100'
              alt='homePage.third_image_name'
            />
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleControls'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleControls'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </div>
  );
};

export default Slider;
