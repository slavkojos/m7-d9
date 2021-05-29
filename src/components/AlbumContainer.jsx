import { Box, Text, Center, Flex, Heading } from "@chakra-ui/react";
import Song from "./Song";
import { getSongsFromTracklist } from "../functions/functions";
import { useState, useEffect, useCallback } from "react";

export default function AlbumContainer(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    setIsLoading(true);
    setData(await getSongsFromTracklist(props.tracklistUrl));

    setIsLoading(false);
  }, [props.link]);

  useEffect(() => {
    console.log("pls");
    getData();
  }, []);

  return (
    <Flex alignItems="stretch" justifyContent="center" flexDirection="column" w={"100%"} my={3}>
      <Heading as="h2" size="lg" my={3} textAlign="center">
        {props.albumTitle}
      </Heading>
      {data.map((song, index) => {
        return <Song title={song.title} key={song.id} id={song.id} index={index + 1} />;
      })}
    </Flex>
  );
}
