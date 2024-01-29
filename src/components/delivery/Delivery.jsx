import React from "react";
import "./Delivery.css";
import Filter from "../common/filters/Filter";
import DeliveryCollections from "./DeliveryCollections";
import TopBrands from "./TopBrands";
import ExploreSection from "../common/ExploreSection/ExploreSection";
import { restaurants } from "../../Data/restaurants";

const deliveryfilters = [
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

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div>
      <Filter filterlist={deliveryfilters}></Filter>
      <DeliveryCollections></DeliveryCollections>
      <TopBrands></TopBrands>
      <ExploreSection
        list={restaurantList}
        collectionName="Delivery Restuarants in Bangalore"
      ></ExploreSection>
    </div>
  );
};

export default Delivery;
