import React from "react";
import { Bodytopvid } from "../body/Bodytopvid";
import { BsBellFill } from "react-icons/bs";
import { Box, HStack, Flex, Icon, Text } from "@chakra-ui/react";

export function Bodytop() {
  return (
    <Box
      bgImage="url('./assets/bg.png')"
      backgroundSize="cover"
      h="480px"
      backgroundPosition="100% 70%"
    >
      <HStack justifyContent="center" spacing="20px" padding="100px">
        <Flex bgColor="#1F1F23" h="320px" w="300px" flexDirection="column">
          <Box w="70px" marginLeft="25px" marginTop="55px">
            <Text
              color="#1F1F23"
              fontWeight="semibold"
              bgColor="#EFEFF1"
              borderRadius="5px"
              paddingLeft="5px"
              paddingRight="5px"
              fontSize="14px"
            >
              OFFLINE
            </Text>
          </Box>
          <Box
            color="#EFEFF1"
            fontWeight="bold"
            fontSize="23px"
            marginLeft="25px"
            paddingTop="0"
          >
            Check out this Call of Duty: Warzone stream from yesterday
          </Box>
          <HStack marginLeft="25px" marginTop="70px">
            <Icon color="#EFEFF1" as={BsBellFill} />{" "}
            <Text color="#EFEFF1" fontSize="14px">
              You will be notified when Ismail Kemmoune is live
            </Text>
          </HStack>
        </Flex>
        <Bodytopvid />
      </HStack>
    </Box>
  );
}
