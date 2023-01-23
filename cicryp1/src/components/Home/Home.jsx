import React from "react";
import Collections from "./Collections/Collections";
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
      <Collections />
      <Search />
    </main>
  );
};

export default Home;
