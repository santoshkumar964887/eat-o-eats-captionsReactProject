import React from "react";
const RandomePic = () => {
  let randomImageNames = [
    "cuisine",
    "dishes",
    "food",
    "delicious",
    "restaurant",
    "gourmet",
    "foodies",
    "meat",
    "bread",
    "fruit",
    "pizza",
    "burguer",
    "juice",
    "coke",
    "salad",
    "snack",
    "drink",
    "coffee",
    "cheese",
    "tea",
  ];
  let randomImage = randomImageNames[Math.floor(Math.random() * (20 - 0) + 0)];

  const image = `https://source.unsplash.com/500x300/?${randomImage}`;
  

  return <div>
      <img className="image" src={ image} alt="Randome Generated Food Images "/>
  </div>;
};

export default RandomePic;
