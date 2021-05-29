import React from "react";
import { Box, Center, Image, Flex, Input, Button, Link, Text, Container, Heading, Skeleton } from "@chakra-ui/react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { fetchTrack, getSongsFromTracklist } from "../functions/functions";
import { useEffect, useState, useCallback } from "react";
import { ISearchResult } from "../typings";
import AlbumContainer from "../components/AlbumContainer";
interface Props {
  searchResults: ISearchResult[];
  setSearchResults: (results: ISearchResult[]) => void;
  searchInput: string;
}

export default function Details(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [songData, setSongData] = useState([]);
  const [tracklist, setTracklist] = useState([]);
  //const item = props.searchResults.find((track) => String(track.id) === props.match.params.id);
  const getData = useCallback(async () => {
    setIsLoading(true);
    setData(await fetchTrack(props.match.params.id));

    setIsLoading(false);
  }, [props.match.params.id]);

  useEffect(() => {
    console.log("pls");
    getData();
  }, [props.match.params.id]);
  console.log(props);
  console.log(data);
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
            <Image src={data.data.album.cover_xl} />
            <Heading as="h2" size="xl">
              {data.data.title}
            </Heading>
            <Flex width="100%" alignItems="center" my={3}>
              <Image src={data.data.artist.picture} />
              <Heading as="h2" size="md" mx={3}>
                {data.data.artist.name}
              </Heading>
            </Flex>
            <AudioPlayer autoPlay={false} src={data.data.preview} onPlay={(e) => console.log("onPlay")} volume={0.5} />
            <AlbumContainer tracklistUrl={data.data.album.tracklist} albumTitle={data.data.album.title} />
          </Flex>
        </Container>
      )}
    </Box>
  );
}
