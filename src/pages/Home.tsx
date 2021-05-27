import { Box, Center, Image, Flex, Input, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { useState } from "react";

interface Props {
  searchInput: string;
  setSearchInput: (input: string) => void;
  setSearchResults: (input: string) => void;
}

const Home: React.FC<Props> = ({ searchInput, setSearchInput, history }) => {
  const [emptyInputCheck, setEmptyInputCheck] = useState(true);
  return (
    <Center>
      <Flex alignItems="center" justify="flex-start" flexDirection="column">
        <Image boxSize="30%" src="https://media4.giphy.com/media/YzgvFJN9XBDBVkXsny/source.gif" alt="Segun Adebayo" />
        <Input
          my={3}
          width="80%"
          variant="outline"
          placeholder="Search for music..."
          onChange={(e) => {
            setSearchInput(e.target.value);
            e.target.value.length > 0 ? setEmptyInputCheck(false) : setEmptyInputCheck(true);
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter" && searchInput !== "") {
              history.push("/search");
            }
          }}
        />
        <Link as={RouterLink} to="/search">
          <Button colorScheme="teal" size="lg" disabled={emptyInputCheck}>
            Search
          </Button>
        </Link>
      </Flex>
    </Center>
  );
};

export default Home;
