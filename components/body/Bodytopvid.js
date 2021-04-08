import React from "react";
import { BiPlay } from "react-icons/bi";
import { HiVolumeUp } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiMovie } from "react-icons/bi";
import { RiFullscreenFill } from "react-icons/ri";
import ReactPlayer from "react-player";
import { HStack, Text, IconButton, Flex } from "@chakra-ui/react";

export function Bodytopvid() {
  return (
    <Flex h="320px" w="500">
      <ReactPlayer
        url="https://youtu.be/iYZFwsr9nhU"
        controls="false"
        pip="true"
      />
      <HStack position="absolute" h="650px">
        <IconButton
          aria-label="play"
          icon={<BiPlay />}
          bgColor="transparent"
          color="white"
          fontSize="22px"
        />
        <IconButton
          aria-label="volume"
          icon={<HiVolumeUp />}
          bgColor="transparent"
          color="white"
          fontSize="22px"
        />
        <IconButton
          aria-label="settings"
          icon={<FiSettings />}
          bgColor="transparent"
          color="white"
          fontSize="22px"
        />
      </HStack>
    </Flex>
  );
}
