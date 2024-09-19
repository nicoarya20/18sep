'use client'

import { Carousel } from "@mantine/carousel"
import { Flex, Image } from "@mantine/core"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"


export default function Carosole() {
  const autoplay = useRef(Autoplay({ delay: 5000}));
   return (
      <>
      <Carousel
      withIndicators
      height={150}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      >
         <Carousel.Slide>
            <Flex justify={"center"} align={"center"} h={"100%"} >
               <Image src="/assets/img/carousel/1.png" alt="image" />
            </Flex>
         </Carousel.Slide>
         <Carousel.Slide>
            <Flex justify={"center"} align={"center"} h={"100%"}>
               <Image src="/assets/img/carousel/1.png" alt="image" />
            </Flex>
         </Carousel.Slide>
         <Carousel.Slide>
            <Flex justify={"center"} align={"center"} h={"100%"}>
               <Image src="/assets/img/carousel/1.png" alt="image" />
            </Flex>
         </Carousel.Slide>
      </Carousel>
      </>
  );
}
