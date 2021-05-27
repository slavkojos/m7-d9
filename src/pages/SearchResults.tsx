import React from "react";
import { Box, Center, Image, Flex, Input, Button, Spinner, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchSongsList } from "../functions/functions";
import SearchResult from "../components/SearchResult";
import { ISearchResult } from "../typings";

interface Props {
  searchResults: ISearchResult[];
  setSearchResults: (results: ISearchResult[]) => void;
  searchInput: string;
}

export default function SearchResults({ searchResults, searchInput, setSearchResults }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setSearchResults(await fetchSongsList(searchInput));
      setIsLoading(false);
    })();
  }, []);

  console.log(searchResults);

  return (
    <Box>
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        {isLoading === true ? (
          <SimpleGrid columns={[2, null, 4]} spacing="40px">
            <Skeleton height="250px" width="250px" />
            <Skeleton height="250px" width="250px" />
            <Skeleton height="250px" width="250px" />
            <Skeleton height="250px" width="250px" />
            <Skeleton height="250px" width="250px" />
            <Skeleton height="250px" width="250px" />
            <Skeleton height="250px" width="250px" />
            <Skeleton height="250px" width="250px" />
            <Skeleton height="250px" width="250px" />
          </SimpleGrid>
        ) : (
          <SimpleGrid columns={[2, null, 4]} spacing="40px">
            {searchResults.map((result) => {
              return (
                <SearchResult
                  key={result.id}
                  id={result.id}
                  name={result.title_short}
                  type={result.type}
                  album={result.album}
                  artist={result.artist}
                />
              );
            })}
          </SimpleGrid>
        )}
      </Flex>
    </Box>
  );
}
