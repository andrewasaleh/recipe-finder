import React from "react";
import Trending from "./Trending";
import Dessert from "./Dessert";
import SearchPage from "./SearchPage";
import SearchResults from "./SearchResults";

function Home() {
  return (
    <div>
      <SearchPage />
      <SearchResults />
      <Trending />
      <Dessert />
    </div>
  );
}

export default Home;
