import React from "react";
import { Header } from "../components/navbar/Header";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Body } from "../components/body/Body";
import { Flex, Box, Grid, GridItem } from "@chakra-ui/react";

export default function Home() {
  return (
    <Grid
      templateColumns="240px 1fr"
      templateRows="50px 1fr"
      position="relative"
      h="100vh"
    >
      <GridItem colSpan="2" position="sticky">
        <Header />
      </GridItem>
      <GridItem>
        <Sidebar />
      </GridItem>
      <GridItem>
        <Body />
      </GridItem>
    </Grid>
    /* <Flex>
      <Header />
      <Sidebar />
      <Body />
    </Flex>*/
  );
}
