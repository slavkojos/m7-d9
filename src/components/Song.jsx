import { Box, Text, Center, Link, Button, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function fancyTimeFormat(duration) {
  // Hours, minutes and seconds
  var hrs = ~~(duration / 3600);
  var mins = ~~((duration % 3600) / 60);
  var secs = ~~duration % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}

export default function Song(props) {
  return (
    <Center my={2} as={Button} colorScheme="teal" variant="outline">
      <Text as={RouterLink} to={`/details/` + props.id} textDecoration="none" w={"100%"}>
        <Flex justify="space-between">
          <Text>{props.index + ".  " + props.title}</Text>
          <Text>{fancyTimeFormat(props.duration)}</Text>
        </Flex>
      </Text>
    </Center>
  );
}
