import React from "react";
import { Box, Center, Image, Flex, Input, Button, Link, Text, Container, Heading } from "@chakra-ui/react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Details(props) {
  const item = props.searchResults.find((track) => String(track.id) === props.match.params.id);

  return (
    <Container>
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Image src={item.album.cover_xl} />
        <Heading as="h2" size="xl">
          {item.title_short}
        </Heading>
        <Flex width="100%" alignItems="center" my={3}>
          <Image src={item.artist.picture} />
          <Heading as="h2" size="md" mx={3}>
            {item.artist.name}
          </Heading>
        </Flex>

        <AudioPlayer autoPlay={false} src={item.preview} onPlay={(e) => console.log("onPlay")} volume={0.5} />
      </Flex>
    </Container>
  );
}
