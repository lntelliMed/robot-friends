import React from "react";

const searchBox = props => {
  return (
    <div>
      <input
        aria-label="Search Robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots.."
        onChange={event => props.searchChangeHandler(event)}
      />
    </div>
  );
};

export default searchBox;
