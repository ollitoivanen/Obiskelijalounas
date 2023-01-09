export const mint_green = "#d6ffc7";

export const _getGist = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/ollitoivanen/OpiskelijalounasWebFetchAction/main/all_restaurants_menu.json"
  );
  const data = await response.text();
  const jsonData = JSON.parse(data);
  return jsonData;
};

export const _searchRestaurantNames = (searchTerm, restaurantData) => {
  const matchingRestaurants = [];
  for (const restaurant of restaurantData) {
    if (restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      matchingRestaurants.push(restaurant);
    }
  }

  return matchingRestaurants;
};

//Adding favorites

export const _checkIfRestaurantIsFavorite = (
  restaurant,
  favoriteRestaurants
) => {
  if (favoriteRestaurants.includes(restaurant)) return true;
  return false;
};

//Storage

export const _getFavoriteRestaurants = async () => {
  try {
    const jsonValue = await localStorage.getItem("favorite_restaurants");
    if (jsonValue === null) return [];
    return JSON.parse(jsonValue);
  } catch (e) {
    return;
  }
};

export const _storeFavoriteRestaurants = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await localStorage.setItem("favorite_restaurants", jsonValue);
    return true;
  } catch (e) {
    return false;
  }
};
