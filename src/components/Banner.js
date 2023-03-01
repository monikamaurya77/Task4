//h
import React from "react";

import Search from "../components/Search";

const Banner = () => {
  return (
    <>
    <h1 className="heading">Search properties to rent</h1>
    <button className="searh_btn">Search with Search Bar </button>
      <Search />
    </>
  );
};

export default Banner;
