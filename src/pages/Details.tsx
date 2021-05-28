import React from "react";
import { Box, Center, Image, Flex, Input, Button, Link, Text, Container, Heading, Skeleton } from "@chakra-ui/react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { fetchTrack } from "../functions/functions";
import { useEffect, useState, useCallback } from "react";
import { ISearchResult } from "../typings";
interface Props {
  searchResults: ISearchResult[];
  setSearchResults: (results: ISearchResult[]) => void;
  searchInput: string;
}

export default function Details(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [songData, setSongData] = useState([]);
  //const item = props.searchResults.find((track) => String(track.id) === props.match.params.id);
  const getSongData = useCallback(async () => {
    console.log("pls 1");

    setIsLoading(true);
    setSongData(await fetchTrack(props.match.params.id));
    setIsLoading(false);
  }, []);
  useEffect(() => {
    console.log("pls");

    getSongData();
  }, [props.match.params.id]);
  console.log(props);
  console.log("songdata", songData);
  console.log(isLoading);
  console.log(props.match.params.id);

  return (
    <Box>
      {isLoading === true ? (
        <Container>
          <Skeleton height="500px" />
          <Skeleton height="100px" />
          <Skeleton height="200px" />
        </Container>
      ) : (
        <Container>
          <Flex alignItems="center" justifyContent="center" flexDirection="column">
            <Image src={songData.album.cover_xl} />
            <Heading as="h2" size="xl">
              {songData.title}
            </Heading>
            <Flex width="100%" alignItems="center" my={3}>
              <Image src={songData.artist.picture} />
              <Heading as="h2" size="md" mx={3}>
                {songData.artist.name}
              </Heading>
            </Flex>
            <AudioPlayer autoPlay={false} src={songData.preview} onPlay={(e) => console.log("onPlay")} volume={0.5} />
          </Flex>
        </Container>
      )}
    </Box>
  );
}
