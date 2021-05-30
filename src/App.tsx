import React from "react";
import { useState } from "react";
import { ChakraProvider, Box, Text, VStack, Code, Grid, theme, IconButton, Flex, Link } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Details from "./pages/Details";
import { BrowserRouter as Router, Switch, Route, Link as RouterLink } from "react-router-dom";
import { ImHome } from "react-icons/im";

export const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex justify="space-between" p={3} pos="fixed" zIndex={2} top="0" left="0" right="0">
          <Link as={RouterLink} to={"/"}>
            <IconButton variant="outline" colorScheme="teal" aria-label="Home" icon={<ImHome />} />
          </Link>
          <ColorModeSwitcher />
        </Flex>
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
