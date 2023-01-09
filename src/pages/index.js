import React, { useState, useEffect } from "react";
import RestaurantCardComponent from "../components/RestaurantCardComponent";
import SearchBarComponent from "../components/SearchBarComponent";
import { _getGist, _getFavoriteRestaurants } from "../utils/functions";

const IndexPage = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [renderedRestaurantData, setRenderedRestaurantData] = useState(null);
  const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);

  useEffect(() => {
    const _loadData = async () => {
      const everyRestaurantData = await _getGist();
      let favoriteRestaurants = await _getFavoriteRestaurants();
      let orderedRestaurantData = await _orderRestaurantData(
        favoriteRestaurants,
        everyRestaurantData
      );
      setFavoriteRestaurants(favoriteRestaurants);
      setRenderedRestaurantData(orderedRestaurantData);
      setRestaurantData(orderedRestaurantData);
    };
    _loadData();
  }, []);

  const _orderRestaurantData = async (favoriteRestaurants, restaurantData) => {
    let reorderedRestaurantData = [];
    restaurantData.forEach((restaurant) => {
      if (favoriteRestaurants.includes(restaurant.name)) {
        //To the first index
        reorderedRestaurantData.unshift(restaurant);
      } else {
        //To the last index
        reorderedRestaurantData.push(restaurant);
      }
    });
    return reorderedRestaurantData;
  };

  const _renderMatchingRestaurants = (matchingRestaurants) => {
    setRenderedRestaurantData(matchingRestaurants);
  };

  const _checkIfDataLoaded = () => {
    if (renderedRestaurantData !== null) {
      return (
        <div>
          <SearchBarComponent
            renderMatchingRestaurants={_renderMatchingRestaurants}
            restaurantData={restaurantData}
          />
          {renderedRestaurantData.map((restaurant) => (
            <RestaurantCardComponent
              key={restaurant.name}
              restaurantData={restaurant}
              favoriteRestaurants={favoriteRestaurants}
            ></RestaurantCardComponent>
          ))}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <main style={pageStyles}>
      <title>Opiskelijalounas Åbo</title>
      {_checkIfDataLoaded()}
    </main>
  );
};

const pageStyles = {
  backgroundColor: "#d6ffc7",
  color: "black",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

export default IndexPage;
