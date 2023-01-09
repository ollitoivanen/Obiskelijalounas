import React, { useEffect, useState } from "react";

import RestaurantCardMenuComponent from "./RestaurantCardMenuComponent";
import {
  _checkIfRestaurantIsFavorite,
  _getFavoriteRestaurants,
  _storeFavoriteRestaurants,
} from "../utils/functions";

import favorite_full from "../images/favorite_full.png";
import favorite_border from "../images/favorite_border.png";

const RestaurantCardComponent = (props) => {
  const { favoriteRestaurants, restaurantData } = props;
  const { name, url, openHours, menu } = restaurantData;
  const [favoriteRestaurant, setFavoriteRestaurant] = useState(false);
  useEffect(() => {
    if (_checkIfRestaurantIsFavorite(name, favoriteRestaurants)) {
      setFavoriteRestaurant(true);
    }
  }, []);

  const _determineFavoriteIcon = () => {
    if (favoriteRestaurant) {
      return <img style={image_favorite} src={favorite_full}></img>;
    }
    return <img style={image_favorite} src={favorite_border}></img>;
  };

  const _onFavoriteIconPress = async () => {
    let currentFavoriteRestaurants = await _getFavoriteRestaurants();
    if (!Array.isArray(currentFavoriteRestaurants)) return;
    if (_checkIfRestaurantIsFavorite(name, currentFavoriteRestaurants)) {
      await _removeFavoriteRestaurant(name, currentFavoriteRestaurants);
    } else {
      await _addFavoriteRestaurant(name, currentFavoriteRestaurants);
    }
  };

  const _addFavoriteRestaurant = async (
    newFavoriteRestaurant,
    currentFavoriteRestaurants
  ) => {
    //Immediately change to full heart to give user feedback
    setFavoriteRestaurant(true);
    currentFavoriteRestaurants.push(newFavoriteRestaurant);
    const success = await _storeFavoriteRestaurants(currentFavoriteRestaurants);
    if (success === undefined) setFavoriteRestaurant(false);
  };

  const _removeFavoriteRestaurant = async (
    name,
    currentFavoriteRestaurants
  ) => {
    setFavoriteRestaurant(false);

    const indexOfRestaurant = currentFavoriteRestaurants.indexOf(name);
    currentFavoriteRestaurants.splice(indexOfRestaurant, 1);

    await _storeFavoriteRestaurants(currentFavoriteRestaurants);
  };
  return (
    <div style={view_container}>
      <div style={view_row_container}>
        <a href={url} style={text_restaurant_name}>
          {name}
        </a>
        <a style={image_favorite} onClick={() => _onFavoriteIconPress()}>
          {_determineFavoriteIcon()}
        </a>
      </div>
      <p style={text_restaurant_open_hours}>{openHours}</p>
      <RestaurantCardMenuComponent menu={menu} />
    </div>
  );
};

const view_container = {
  backgroundColor: "white",
  borderStyle: "solid",
  borderColor: "black",
  borderWidth: 3,
  borderRadius: 10,
  margin: 8,
  marginTop: 16,
  marginBottom: 16,
  paddingTop: 16,
  paddingBottom: 16,
  paddingRight: 16,
};

const view_row_container = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  margin: 16,
};

const image_favorite = {
  height: 24,
  width: 24,
};

const text_restaurant_name = {
  color: "black",
  fontFamily: "sans-serif",
  fontWeight: "bold",
  textDecoration: "none",
  fontSize: 24,
  marginRight: 12,
};

const text_restaurant_open_hours = {
  color: "black",
  fontFamily: "sans-serif",
  fontWeight: "bold",
  fontSize: 20,
  marginLeft: 20,
  marginTop: 0,
};

export default RestaurantCardComponent;
