import React from "react";
import { FaCircle } from "react-icons/fa";
import { VStack, Avatar, Icon, Text, HStack } from "@chakra-ui/react";

export function SidebarUser({ name, url, game, views }) {
  return (
    <HStack
      _hover={{ bgColor: "#25252c" }}
      cursor="pointer"
      w="100%"
      padding="1px"
      marginBottom="-8px"
    >
      <Avatar
        name="alaa"
        src={url}
        size="sm"
        objectFit="contain"
        marginRight="5px"
        marginLeft="5px"
      />
      <VStack w="100%" alignItems="normal" spacing="-1">
        <Text color="#DEDEE3" fontWeight="semibold">
          {name}
        </Text>
        <Text color="#ADADB8" fontWeight="semibold" fontSize="13px">
          {game}
        </Text>
      </VStack>
      <HStack spacing="5px" alignItems="flex-start" h="100%">
        <Icon as={FaCircle} fontSize="10px" color="red" mt="5px" />
        <Text color="#DEDEE3" fontSize="13px" marginRight="6px">
          {views}
        </Text>
      </HStack>
    </HStack>
  );
}
