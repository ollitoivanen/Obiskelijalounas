import React from "react";

const RestaurantCardMenuComponent = (props) => {
  const { menu } = props;

  const _renderMenu = () => {
    return (
      <div>
        {menu.map((meal) => (
          <div key={meal.name}>
            <div style={view_header_row_container}>
              <p style={text_header_meal_type}>{meal.type}</p>
              <p style={text_price}>{meal.price}</p>
            </div>
            <p style={text_meal_name}>{meal.name}</p>
          </div>
        ))}
      </div>
    );
  };
  return <div style={view_container}>{_renderMenu()}</div>;
};

const view_container = {
  backgroundColor: "white",
};

const view_header_row_container = {
  display: "flex",
  flexDirection: "row",
  margin: 24,
  marginBottom: 4,
  alignItems: "center",
  flexWrap: "wrap",
};

const text_header_meal_type = {
  color: "black",
  fontFamily: "sans-serif",
  fontWeight: "bold",
  fontSize: 16,
  marginTop: 0,
  marginBottom: 0,
};

const text_price = {
  color: "gray",
  fontFamily: "sans-serif",
  fontWeight: "bold",
  marginLeft: 6,
  marginTop: 0,
  marginBottom: 0,
  fontSize: 14,
};

const text_meal_name = {
  color: "black",
  fontFamily: "sans-serif",
  fontSize: 15,
  marginLeft: 30,
  marginBottom: 12,
  marginTop: 8,
};

export default RestaurantCardMenuComponent;
