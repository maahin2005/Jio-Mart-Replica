import React from 'react';
import ImageGallery from 'react-image-gallery';

function MidTwoImgSlider() {
  const sliderImgLinkArray = [
    {
      original:
        'https://www.jiomart.com/images/cms/aw_rbslider/slides/1709126435_MUMBAI.jpg?im=Resize=(1680,320)',
    },
    {
      original:
        'https://www.jiomart.com/images/cms/aw_rbslider/slides/1708658571_Web_Mumbai_JioMartHome_01.jpg?im=Resize=(1680,320)',
    },
  ];

  return (
    <>
      <ImageGallery
        items={sliderImgLinkArray}
        showPlayButton={false}
        autoPlay={true}
        slideInterval={5000}
        slideOnThumbnailOver={true}
      />
    </>
  );
}

export default MidTwoImgSlider;
