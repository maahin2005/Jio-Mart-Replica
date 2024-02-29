import React from 'react';
import ImageGallery from 'react-image-gallery';

function FirstSlider() {
  const sliderImgLinkArray = [
    {
      original:
        'https://www.jiomart.com/images/cms/aw_rbslider/slides/1706709868_Aaj-Ki-Deals_Desktop.jpg?im=Resize=(1680,320)',
    },
    {
      original:
        'https://www.jiomart.com/images/cms/aw_rbslider/slides/1708970768_Breakfast_and_Spreads_At_Best_Prices_Desktop.jpg?im=Resize=(1680,320)',
    },

    {
      original:
        'https://www.jiomart.com/images/cms/aw_rbslider/slides/1709142885_Sweet_Treats_To_Savoury_Feasts_Desktop.jpg?im=Resize=(1680,320)',
    },
    {
      original:
        'https://www.jiomart.com/images/cms/aw_rbslider/slides/1709057810_New_Season_Launch_Desktop.jpg?im=Resize=(1680,320)',
    },
    {
      original:
        'https://www.jiomart.com/images/cms/aw_rbslider/slides/1709142942_Bestselling_Laptops_Desktop.jpg?im=Resize=(1680,320)',
    },
    {
      original:
        'https://www.jiomart.com/images/cms/aw_rbslider/slides/1709058003_Laundry_Essentials__Desktop.jpg?im=Resize=(1680,320)',
    },
    {
      original:
        'https://www.jiomart.com/images/cms/aw_rbslider/slides/1709143002_Premium_Kitchen_Tools_and_Serving_Essentials_Desktop.jpg?im=Resize=(1680,320)',
    },
    {
      original:
        'https://www.jiomart.com/images/cms/aw_rbslider/slides/1709143051_Unwrap_Savings__Unfold_Freshness_Desktop.jpg?im=Resize=(1680,320)',
    },
    {
      original:
        'https://www.jiomart.com/images/cms/aw_rbslider/slides/1708772964_Pocket-Friendly_Artisanal_Decor_and_Furnishing_Desktop.jpg?im=Resize=(1680,320)',
    },
    {
      original:
        'https://www.jiomart.com/images/cms/aw_rbslider/slides/1709058173_Rajasthani_Bedsheets_Desktop.jpg?im=Resize=(1680,320)',
    },
    {
      original:
        'https://www.jiomart.com/images/cms/aw_rbslider/slides/1709058216_Big_Savings_On_Dry_Fruits_and_Nuts_Desktop.jpg?im=Resize=(1680,320)',
    },
  ];

  return (
    <ImageGallery
      items={sliderImgLinkArray}
      showPlayButton={false}
      autoPlay={true}
      slideInterval={5000}
      slideOnThumbnailOver={true}
    />
  );
}

export default FirstSlider;
