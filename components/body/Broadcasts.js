import React from "react";
import { HStack, Text, Box, VStack } from "@chakra-ui/react";

export function Broadcasts() {
  return (
    <VStack
      alignItems="normal"
      marginLeft="40px"
      marginTop="10px"
      spacing="4px"
    >
      <Box
        bgImage="url(https://img.utdstc.com/screen/1/league-legends-005.jpg:800)"
        backgroundSize="cover"
        w="300px"
        h="170px"
      >
        <VStack spacing="100px">
          <Box
            bgColor="rgba(0, 0, 0, 0.6)"
            color="#EFEFF1"
            margin="10px"
            alignSelf="start"
            fontSize="13px"
            fontWeight="600"
            paddingRight="4px"
            paddingLeft="4px"
          >
            8:19:50
          </Box>
          <HStack spacing="140px">
            <Box
              bgColor="rgba(0, 0, 0, 0.6)"
              color="#EFEFF1"
              fontSize="13px"
              fontWeight="600"
              paddingRight="4px"
              paddingLeft="4px"
            >
              40.4K views
            </Box>
            <Box
              bgColor="rgba(0, 0, 0, 0.6)"
              color="#EFEFF1"
              fontSize="13px"
              fontWeight="600"
              paddingRight="4px"
              paddingLeft="4px"
            >
              Yesterday
            </Box>
          </HStack>
        </VStack>
      </Box>
      <Box marginTop="-4px">
        <HStack>
          <Box
            bgImage="url(https://static-cdn.jtvnw.net/ttv-boxart/Teamfight%20Tactics-285x380.jpg)"
            h="56px"
            w="40px"
            bgSize="cover"
          ></Box>
          <VStack alignItems="normal" spacing="-2px">
            <Text color="#DEDEE3" fontWeight="semibold">
              [FR/ENG] TFT Ranked - Master ELO
            </Text>
            <Text color="#ADADB8" fontSize="14px">
              IsmailKemmoune
            </Text>
            <Text color="#ADADB8">Teamfight Tactics</Text>
          </VStack>
        </HStack>
      </Box>
    </VStack>
  );
}
