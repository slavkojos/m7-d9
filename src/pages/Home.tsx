import { Box, Center, Image, Flex, Input, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

interface Props {
  searchInput: string;
  setSearchInput: (input: string) => void;
  setSearchResults: (input: string) => void;
}

const Home: React.FC<Props> = ({ searchInput, setSearchInput }) => {
  return (
    <Center>
      <Flex alignItems="center" justify="start" flexDirection="column">
        <Image boxSize="30%" src="https://media4.giphy.com/media/YzgvFJN9XBDBVkXsny/source.gif" alt="Segun Adebayo" />
        <Input
          my={3}
          width="80%"
          variant="outline"
          placeholder="Search for music..."
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <Link as={RouterLink} to="/search">
          <Button colorScheme="teal" size="lg">
            Search
          </Button>
        </Link>
      </Flex>
    </Center>
  );
};

export default Home;
