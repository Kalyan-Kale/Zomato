import React from "react";
import "./DeliveryItem.css";

const DeliveryItem = ({ item }) => {
  return (
    <div>
      <div className="delivery-item-cover">
        <img src={item.cover} alt={item.title} className="delivery-item-image" />
        <div className="delivery-item-title">{item.title}</div>
      </div>
    </div>
  );
};

export default DeliveryItem;
