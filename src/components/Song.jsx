import { Box, Text, Center, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Song(props) {
  return (
    <Center my={3}>
      <Link as={RouterLink} to={`/details/` + props.id}>
        {props.index + ".  " + props.title}
      </Link>
    </Center>
  );
}
