import React from "react";

/**
 ** @desc determine the month and season based on location and current month
 **/
const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "winter" : "summer";
  } else {
    return latitude < 0 ? "summer" : "winter";
  }
};

/**
** @desc Season config object template
**/
const seasonConfig = {
  summer: {
    text: "It's hot",
    iconName: "sun"
  },
  winter: {
    text: "It's cold",
    iconName: "snowflake"
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const {text, iconName} = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
