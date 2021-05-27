import React from "react";
import { Box, Center, Image, Flex, Input, Button, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function SearchResult(props) {
  console.log(props.album);

  return (
    <Box my={1}>
      <Link as={RouterLink} to={`/details/` + props.id}>
        <Flex alignItems="center" justify="center" flexDirection="column">
          <Image src={props.album.cover_medium} />
          <Text my={2} fontSize="lg">
            {props.name}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
}
