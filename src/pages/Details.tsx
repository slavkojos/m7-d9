import React from "react";
import { Box, Center, Image, Flex, Input, Button, Link } from "@chakra-ui/react";

export default function Details(props) {
  return (
    <Box my={1}>
      <Link>{props.name}</Link>
    </Box>
  );
}
