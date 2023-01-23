import React from "react";
import Discover from "./Discover/Discover";
import Lovely from "./Lovely/Lovely";
import Popular from "./Popular/Popular";
import Search from "./Search/Search";

const Home = () => {
  return (
    <main>
      <Discover />
      <Lovely />
      <Popular />
      <Search />
    </main>
  );
};

export default Home;
