import React from "react";
import { RiSearchLine } from "react-icons/ri";
import {
  HStack,
  Text,
  Box,
  VStack,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";

export function SearchBar() {
  return (
    <HStack spacing="0">
      <Input
        bgColor="#464649"
        w="355px"
        h="36px"
        borderColor="black"
        placeholder="Search"
        borderRadius="7px 0px 0px 7px"
        _placeholder={{
          color: "#EFEFF1",
          fontSize: "15px",
          fontWeight: "600",
        }}
      />
      <IconButton
        bgColor="#29292C"
        color="#464649"
        fontSize="25px"
        aria-label="search"
        h="34px"
        borderRadius="0px 7px 7px 0px"
        icon={<RiSearchLine />}
      />
    </HStack>
  );
}
