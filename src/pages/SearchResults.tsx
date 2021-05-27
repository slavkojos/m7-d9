import React from "react";
import { Box, Center, Image, Flex, Input, Button, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchSongsList } from "../functions/functions";
import SearchResult from "../components/SearchResult";

export default function SearchResults({ searchInput, setSearchResults, searchResults }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(async () => {
    setIsLoading(true);
    setSearchResults(await fetchSongsList(searchInput));
    setIsLoading(false);
  }, []);

  console.log(searchResults);

  return (
    <Box>
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        {isLoading === true ? (
          <Spinner size="xl" />
        ) : (
          searchResults.map((result) => {
            return <SearchResult my={3} name={result.title} />;
          })
        )}
      </Flex>
    </Box>
  );
}
