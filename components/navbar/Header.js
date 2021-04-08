import React from "react";
import { SearchBar } from "../navbar/SearchBar";
import { BsThreeDots } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FiInbox } from "react-icons/fi";
import { BiMessageAlt } from "react-icons/bi";
import { FaRegGem } from "react-icons/fa";
import {
  IconButton,
  HStack,
  Image,
  Text,
  Button,
  Avatar,
  Box,
  Flex,
} from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      bgColor="#18181B"
      h="50px"
      position="fixed"
      w="100%"
      borderBottom="1px"
      borderBottomColor="black"
      zIndex={100}
    >
      <HStack spacing="450px">
        <Box>
          <HStack spacing="35px">
            <Image
              src="http://pngimg.com/uploads/twitch/twitch_PNG6.png"
              alt="logo"
              h="30px"
              paddingLeft="10px"
            />
            <Text color="white" fontSize="lg" fontWeight="600">
              Following
            </Text>
            <Text color="white" fontSize="lg" fontWeight="600">
              Browse
            </Text>
            <IconButton
              aria-label="dots"
              icon={<BsThreeDots />}
              bgColor="transparent"
              color="white"
              fontSize="22px"
            />
          </HStack>
        </Box>
        <SearchBar />
        <Box>
          <HStack>
            <IconButton
              aria-label="crown"
              icon={<CgCrown />}
              bgColor="transparent"
              color="white"
              fontSize="22px"
            />
            <IconButton
              aria-label="inBox"
              icon={<FiInbox />}
              bgColor="transparent"
              color="white"
              fontSize="22px"
            />
            <IconButton
              aria-label="message"
              icon={<BiMessageAlt />}
              bgColor="transparent"
              color="white"
              fontSize="22px"
            />
            <Button
              leftIcon={<FaRegGem />}
              variant="solid"
              size="sm"
              bgColor="#464649"
              color="white"
            >
              Get Bits
            </Button>
            <Avatar
              name="avatar"
              src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-70x70.png"
              size="sm"
            />
          </HStack>
        </Box>
      </HStack>
    </Flex>
  );
}
