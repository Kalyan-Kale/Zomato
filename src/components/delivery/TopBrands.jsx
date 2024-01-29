import React from 'react'
import "./Topbrands.css";
import Nextarrow from '../common/carousel/Nextarrow';
import PrevArrow from '../common/carousel/PrevArrow';
import Slider from 'react-slick';

const brands = [
    {
        id: 1,
        title: "Burger King",
        cover:
          "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png",
          time:"27 min"
      },
      {
        id: 2,
        title: "McDonald's",
        cover:
          "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png",
          time:"26 min"
      },
      {
        id: 3,
        title: "The Hazelnut Factory",
        cover:
          "https://b.zmtcdn.com/data/brand_creatives/logos/1f9e533211a32f12a534f824879b9de2_1703038990.png",
          time:"28 min"
      },
      {
        id: 4,
        title: "La Pino'z Pizza",
        cover:
          "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png",
          time:"30 min"
      },
      {
        id: 5,
        title: "KFC",
        cover:
          "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png",
          time:"24 min"
      },
      {
        id: 6,
        title: "Grandson Of Tunday Kababi",
        cover:
          "https://b.zmtcdn.com/data/brand_creatives/logos/1c69c696c67a0791937fab960a9bdf0a_1611298398.png",
          time:"32 min"
      },
      {
        id: 7,
        title: "Aryan Family's Delight",
        cover:
          "https://b.zmtcdn.com/data/brand_creatives/logos/c62c886c7d28bbb895407f4a3a4a4e5f_1676961058.png",
          time:"27 min"
      },
      {
        id: 8,
        title: "Pizza Hut",
        cover:
          "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png",
          time:"34 min"
      },
      {
        id: 9,
        title: "Dastarkhwan",
        cover:
          "https://b.zmtcdn.com/data/brand_creatives/logos/49939e746ce5db461213bca36c626a31_1620799504.png",
          time:"29 min"
      },
]

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <Nextarrow></Nextarrow>,
    prevArrow: <PrevArrow></PrevArrow>,
  };

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className="collection-title">
        Top brands for you
        </div>
        <Slider {...settings}>
        {brands.map((brand)=>{
            return <div>
                <div className="top-brands-cover">
                    <img src={brand.cover} alt={brand.title} className='top-brands-image'/>
                </div>
            </div>
        })}
        </Slider>
    </div>
  )
}

export default TopBrands