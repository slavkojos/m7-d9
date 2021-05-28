import React from "react";
import { useState } from "react";
import { ChakraProvider, Box, Text, VStack, Code, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Details from "./pages/Details";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Route
          path="/"
          exact
          render={(routerProps) => (
            <Home {...routerProps} searchInput={searchInput} setSearchInput={setSearchInput} setSearchResults={setSearchResults} />
          )}
        />
        <Route
          path="/search"
          exact
          render={(routerProps) => (
            <SearchResults {...routerProps} searchInput={searchInput} setSearchResults={setSearchResults} searchResults={searchResults} />
          )}
        />
        <Route path="/details/:id" exact render={(routerProps) => <Details {...routerProps} searchResults={searchResults} />} />
      </Router>
    </ChakraProvider>
  );
};
