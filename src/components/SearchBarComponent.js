import React from "react";
import { _searchRestaurantNames } from "../utils/functions";

const SearchBarComponent = (props) => {
  const { restaurantData, renderMatchingRestaurants } = props;

  const _searchTermChanged = (newSearchTerm) => {
    console.log(newSearchTerm.target.value);
    let matchingRestaurants = _searchRestaurantNames(
      newSearchTerm.target.value,
      restaurantData
    );

    renderMatchingRestaurants(matchingRestaurants);
  };
  return (
    <span style={container}>
      <input
        style={text_input}
        type="text"
        onChange={_searchTermChanged}
        placeholder={"Hae ravintoloita"}
      />
    </span>
  );
};

const container = {
  display: "flex",
  overflow: "hidden",
};

const text_input = {
  display: "flex",
  fontSize: 20,
  color: "black",
  fontFamily: "sans-serif",
  fontWeight: "bold",
  borderStyle: "solid",
  backgroundColor: "white",
  justifyContent: "center",
  padding: 16,
  borderRadius: 10,
  borderWidth: 3,
  borderColor: "black",
  width: "100%",
  marginLeft: 8,
  marginRight: 8,
};

export default SearchBarComponent;
