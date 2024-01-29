import React from 'react'
import './Dining.css'
import Collection from '../common/collection/Collection'
import Filter from '../common/filters/Filter';
import { diningOut } from "../../Data/diningdata";
import ExploreSection from '../common/ExploreSection/ExploreSection';

const collectionList = [
  {
    id: 1,
    title: "Best in Lucknow",
    cover:"https://b.zmtcdn.com/data/collections/864bffea0db8ff11ac0a98fa7b41eaf3_1702545897.jpg?output-format=webp",
    place:"29 Places"
  },
  {
    id: 2,
    title: "Best Insta-worthy Places",
    cover:"https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252826.jpg?output-format=webp",
    place:"7 Places"
  },
  {
    id: 3,
    title: "Premium Coffee Shops",
    cover:"https://b.zmtcdn.com/data/collections/54a38c33ce8c62c7754e3f0b2fa6eb60_1695898538.png?output-format=webp",
    place:"12 Places"
  },
  {
    id: 4,
    title: "Places For Smoky Kebabs",
    cover:"https://b.zmtcdn.com/data/collections/aef289b722dbc3e665d80059df816a0d_1675239659.jpg?output-format=webp",
    place:"5 Places"
  },
  {
    id: 5,
    title: "Best Bars and Pubs",
    cover:"https://b.zmtcdn.com/data/collections/eb98e6031b99817fc6a82712b99067f0_1696923344.png?output-format=webp",
    place:"6 Places"
  },
  {
    id: 6,
    title: "The Legends of Lucknow",
    cover:"https://b.zmtcdn.com/data/collections/ce8f94a179d859d01f94c441d67ef5ad_1706256869.png?output-format=webp",
    place:"12 Places"
  },
  {
    id: 7,
    title: "Serene Rooftop Places",
    cover:"https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1675239896.jpg?output-format=webp",
    place:"8 Places"
  },
  {
    id: 8,
    title: "Bingeworthy Desserts",
    cover:"https://b.zmtcdn.com/data/collections/3b1f56c1936a6bfa702efd28188ebe6f_1688043267.png?output-format=webp",
    place:"6 Places"
  },
]

const diningfilters = [
  {
    id: 1,
    icon: <i class="fa-solid fa-arrow-up-z-a absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Ratings 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i class="fa-solid fa-timeline"></i>,
  },
];

const diningList = diningOut;

const Diningout = () => {
  return (
    <div>
      <Collection list={collectionList}></Collection>
      <Filter filterlist={diningfilters}></Filter>
      <ExploreSection
        list={diningList}
        collectionName="Trending dining restaurants in Bangalore"
      ></ExploreSection>
    </div>
  )
}

export default Diningout