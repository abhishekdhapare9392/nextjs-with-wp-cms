import React from 'react';

const Slider = ({ props }) => {
  //   console.log(props.data);

  const slider = props.data.slider;
  //   console.log(props.data.slider);
  return (
    <div>
      <div
        id='carouselExampleControls'
        class='carousel slide'
        data-ride='carousel'
      >
        <div class='carousel-inner'>
          <div class='carousel-item active'>
            <img
              src={slider.first_image.url}
              class='d-block w-100'
              alt='homePage.first_image_name'
            />
          </div>
          <div class='carousel-item'>
            <img
              src={slider.second_image.url}
              class='d-block w-100'
              alt='homePage.second_image_name'
            />
          </div>
          <div class='carousel-item'>
            <img
              src={slider.third_image.url}
              class='d-block w-100'
              alt='homePage.third_image_name'
            />
          </div>
        </div>
        <a
          class='carousel-control-prev'
          href='#carouselExampleControls'
          role='button'
          data-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='sr-only'>Previous</span>
        </a>
        <a
          class='carousel-control-next'
          href='#carouselExampleControls'
          role='button'
          data-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='sr-only'>Next</span>
        </a>
      </div>
    </div>
  );
};

export default Slider;
