import React from 'react'
import "./Collection.css"
import Nextarrow from '../carousel/Nextarrow';
import PrevArrow from '../carousel/PrevArrow';
import Slider from "react-slick";

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Nextarrow></Nextarrow>,
    prevArrow: <PrevArrow></PrevArrow>,
  };

const Collection = ({list}) => {
  return (
    <div className='collection-wrapper'>
        <div className="max-width collection">
            <div className="collection-title title">Collection</div>
            <div className="collection-subtitle-row">
                <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Lucknow, based on trends</p>
                <p className='pbtn'>All collections in Lucknow <i class="fa-solid fa-caret-right"></i></p>
            </div>
            <Slider {...settings}>
                {list.map((item)=>(
                    <div>
                        <div className="collection-cover">
                            <img src={item.cover} alt={item.title} className='collection-image'/>
                            <div className="gradient-bg">
                                <h4>{item.title}</h4>
                                <h5>{item.place} <span><i class="fa-solid fa-caret-right"></i></span></h5>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default Collection