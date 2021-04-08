import React from "react";
import { Broadcasts } from "../body/Broadcasts";
import { Bodytop } from "../body/Bodytop";
import { Categories } from "../body/Categories";
import { FaHeart } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiBadgeCheck } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import {
  Avatar,
  Box,
  Text,
  HStack,
  IconButton,
  Button,
  VStack,
  Icon,
} from "@chakra-ui/react";

export function Body() {
  return (
    <Box>
      <Bodytop />
      <Box bgColor="#0E0E10" w="165vh" h="100vh">
        <HStack spacing="870px">
          <HStack paddingTop="25px" paddingLeft="30px">
            <Avatar
              name="ismail"
              src="https://scontent.fcmn2-2.fna.fbcdn.net/v/t1.0-9/160579074_3635888009798447_9191712090894500234_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFiYfiIxUjOISA1lB8nbszjkr2pnuM_nTKSvame4z-dMg2rklAZ8sntV2yO5nDhqFwCgz7h5RheF0J17mu92ZP5&_nc_ohc=Kf1Br7RUzGoAX8Wl9SD&_nc_ht=scontent.fcmn2-2.fna&oh=5b3a0dcfe51da59fbd19aa6303aad71f&oe=60806A2C"
              size="lg"
            />
            <VStack alignItems="normal" spacing="-1">
              <Text fontSize="27px" color="#EFEFF1" fontWeight="bold">
                IsmailKemmoune{" "}
                <Icon fontSize="24px" color="#9147FF" as={HiBadgeCheck} />
              </Text>
              <Text fontSize="15px" color="#EFEFF1">
                17.5K followers
              </Text>
            </VStack>
          </HStack>
          <Box>
            <HStack>
              <IconButton
                aria-label="follow"
                icon={<FaHeart />}
                bgColor="#464649"
                color="#EFEFF1"
                fontSize="17px"
                h="32px"
              />
              <IconButton
                aria-label="notificationOn"
                icon={<BsBellFill />}
                bgColor="#464649"
                color="#EFEFF1"
                fontSize="17px"
                h="32px"
              />
              <Button
                leftIcon={<AiOutlineStar />}
                variant="solid"
                size="sm"
                bgColor="#9147FF"
                color="#EFEFF1"
                rightIcon={<IoIosArrowDown />}
              >
                Subscribe: 20% off
              </Button>
              <IconButton
                aria-label="moreOptions"
                icon={<BsThreeDotsVertical />}
                bgColor="transparent"
                color="#EFEFF1"
                fontSize="22px"
              />
            </HStack>
          </Box>
        </HStack>
        <Box>
          <HStack spacing="25px" paddingLeft="40px" paddingTop="25px">
            <Text fontSize="20px" color="#EFEFF1" fontWeight="semibold">
              Home
            </Text>
            <Text fontSize="20px" color="#EFEFF1" fontWeight="semibold">
              About
            </Text>
            <Text fontSize="20px" color="#EFEFF1" fontWeight="semibold">
              Schedule
            </Text>
            <Text fontSize="20px" color="#EFEFF1" fontWeight="semibold">
              Videos
            </Text>
            <Text fontSize="20px" color="#EFEFF1" fontWeight="semibold">
              Chat
            </Text>
          </HStack>
        </Box>
        <Text
          fontSize="18px"
          color="#EFEFF1"
          fontWeight="semibold"
          marginLeft="40px"
          marginTop="30px"
        >
          Recent broadcasts
        </Text>
        <Broadcasts />
        <Text
          fontSize="18px"
          color="#EFEFF1"
          fontWeight="semibold"
          marginLeft="40px"
          marginTop="30px"
        >
          IsmailKemmoune's recently streamed Categories
        </Text>
        <Categories />
        <Text
          fontSize="18px"
          color="#EFEFF1"
          fontWeight="semibold"
          marginLeft="40px"
          marginTop="30px"
        >
          IsmailKemmoune suggests these streamers
        </Text>
      </Box>
    </Box>
  );
}
