'use client';

import { Box, Flex } from "@chakra-ui/react";
import Header from "./Components/Header/Header";
import { Pricing } from "./Components/Pricing/Pricing";
import { Features } from "./Components/Features/Features";




export default function Home() {
  return (
  
    <Flex direction={"column"}>


        <Header />
        <Pricing/>
        <Features />
        

    </Flex>

  )
}
