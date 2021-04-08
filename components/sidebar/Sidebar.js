import React from "react";
import { SidebarUser } from "../sidebar/SidebarUser";
import { RiSearchLine } from "react-icons/ri";
import {
  VStack,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";

export function Sidebar() {
  const Streamers = [
    {
      name: "Droven0101",
      url:
        "https://scontent.fcmn3-1.fna.fbcdn.net/v/t1.0-9/130907680_811883169663527_844341172740134563_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=s-1djqcmDawAX8SyvI5&_nc_ht=scontent.fcmn3-1.fna&oh=c4168fe8d9d1d4832ba35d4e72ce7ef7&oe=6085E882",
      game: "Call Of Duty",
      views: "7K",
      id: 1,
    },
    {
      name: "Smimid",
      url:
        "https://scontent.fcmn3-1.fna.fbcdn.net/v/t1.0-9/120876075_179590767002617_4177948637192504040_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=nGHDzYsZjQ0AX_TIAi6&_nc_ht=scontent.fcmn3-1.fna&oh=b3f5caf4b360467dc40d74ca815ecc69&oe=6084CDE9",
      game: "Valorant",
      views: "1.2M",
      id: 2,
    },
    {
      name: "AymaneSarrar",
      url:
        "https://media.discordapp.net/attachments/822146815473352785/822148868283826266/83286141_178620606562500_2894206760866807808_n.jpg?width=300&height=533",
      game: "League Of Legends",
      views: "12.5K",
      id: 3,
    },
    {
      name: "Abdo",
      url:
        "https://scontent.fcmn2-2.fna.fbcdn.net/v/t1.6435-9/122976366_449378622696178_4106159383067380882_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=NoEqcR-mmnMAX_kD9Ty&_nc_ht=scontent.fcmn2-2.fna&oh=265d570fb405c9134fbefef66cf13996&oe=608E8DCD",
      game: "Fortnite",
      views: "5",
      id: 3,
    },
  ];
  return (
    <>
      <VStack
        bgColor="#1F1F23"
        w="240px"
        h="100vh"
        flexDirection="column"
        position="fixed"
      >
        <Text
          color="#EFEFF1"
          marginTop="10px"
          paddingLeft="10px"
          fontWeight="semibold"
          alignSelf="start"
        >
          FOLLOWED CHANNELS
        </Text>

        {Streamers.map((streamer) => (
          <SidebarUser
            name={streamer.name}
            url={streamer.url}
            game={streamer.game}
            views={streamer.views}
            key={streamer.id}
          />
        ))}
        <Text
          color="#a970ff"
          cursor="pointer"
          alignSelf="start"
          paddingLeft="10px"
          fontSize="14px"
        >
          Show More
        </Text>
        <Text
          color="#EFEFF1"
          paddingTop="17px"
          paddingLeft="10px"
          fontWeight="semibold"
          alignSelf="start"
        >
          RECOMMENDED CHANNELS
        </Text>
        {Streamers.map((streamer) => (
          <SidebarUser
            name={streamer.name}
            url={streamer.url}
            game={streamer.game}
            views={streamer.views}
            key={streamer.id}
          />
        ))}
        <Text
          color="#a970ff"
          cursor="pointer"
          alignSelf="start"
          paddingLeft="10px"
          fontSize="14px"
        >
          Show More
        </Text>
      </VStack>
      <InputGroup mt="800px" position="relative">
        <InputLeftElement
          aria-label="searchSide"
          children={<RiSearchLine />}
          bgColor="transparent"
          color="#EFEFF1"
        />
        <Input placeholder="Search To Add Friends" />
      </InputGroup>
    </>
  );
}
