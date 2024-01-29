import React from 'react'
import './nightlife.css'
import Collection from '../common/collection/Collection';
import Filter from '../common/filters/Filter';
import ExploreSection from '../common/ExploreSection/ExploreSection';
import { nightLife } from '../../Data/nightdata';

const collectionList = [
  {
    id: 1,
    title: "Best in Lucknow",
    cover:"https://b.zmtcdn.com/data/collections/8868e7345d624a79d5900711eb5f8d00_1696923155.png?output-format=webp",
    place:"29 Places"
  },
  {
    id: 2,
    title: "Best Insta-worthy Places",
    cover:"https://b.zmtcdn.com/data/collections/2a82bf4ab91f34f1c7d5343a22c27446_1702459284.png?output-format=webp",
    place:"7 Places"
  },
  {
    id: 3,
    title: "Premium Coffee Shops",
    cover:"https://b.zmtcdn.com/data/collections/66bee1c025922a59b8b1ab69a3a6b187_1675082109.jpg?output-format=webp",
    place:"12 Places"
  },
  {
    id: 4,
    title: "Places For Smoky Kebabs",
    cover:"https://b.zmtcdn.com/data/collections/b002ac3dedef51dd605505656450b099_1696922552.jpg?output-format=webp",
    place:"5 Places"
  },
  {
    id: 5,
    title: "Best Bars and Pubs",
    cover:"https://b.zmtcdn.com/data/collections/fbe01413b99e6a071af5211d569e7ab6_1691566585.jpeg?output-format=webp",
    place:"6 Places"
  },
  {
    id: 6,
    title: "The Legends of Lucknow",
    cover:"https://b.zmtcdn.com/data/collections/8ea321c04135aacaac89eddb10ef64bd_1688552904.jpg?output-format=webp",
    place:"12 Places"
  },
  {
    id: 7,
    title: "Serene Rooftop Places",
    cover:"https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054253.jpg?output-format=webp",
    place:"8 Places"
  },
  {
    id: 8,
    title: "Bingeworthy Desserts",
    cover:"https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674839220.jpg?output-format=webp",
    place:"6 Places"
  },
]

const nightfilters = [
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

const nightList = nightLife;

const NightLife = () => {
  return (
    <div>
      <Collection list={collectionList}></Collection>
      <Filter filterlist={nightfilters}></Filter>
      <ExploreSection list={nightList}></ExploreSection>
    </div>
  )
}

export default NightLife