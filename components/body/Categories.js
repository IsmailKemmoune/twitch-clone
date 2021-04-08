import React from "react";
import { VStack, Text, Box } from "@chakra-ui/react";

export function Categories() {
  return (
    <VStack
      alignItems="normal"
      marginLeft="40px"
      marginTop="10px"
      spacing="4px"
    >
      <Box
        bgImage="url(https://static-cdn.jtvnw.net/ttv-boxart/Teamfight%20Tactics-285x380.jpg)"
        h="247px"
        w="185px"
        bgSize="cover"
      ></Box>
      <Text
        color="#DEDEE3"
        fontWeight="semibold"
        _hover={{ color: "#9147FF" }}
        cursor="pointer"
      >
        Teamfight Tactics
      </Text>
    </VStack>
  );
}
