'use client';

import { WARNA } from "@/module/_global/fun/WARNA";
import { Anchor, Button, Center, Flex, Group, Image, Stack, Text } from "@mantine/core";
import { useState } from "react";

const listTextWellcome = [
   {
      id: "1",
      text: "Selamat datang di FURNITURA situs jual beli furniture online.",
      img: "/assets/img/welcome/Screen Shot 2024-09-18 at 14.05.09.png"
   },
   {
      id: "2",
      text: "Pilihan yang tepat untuk memilih FURNITURA sebagai tempat pembelian Furniture.",
      img: "/assets/img/welcome/Screen Shot 2024-09-18 at 14.05.18.png"
   },
   {
      id: "3",
      text: "FURNITURA memberikan pelayanan terbaik untuk memenuhi kebutuhan anda.",
      img: "/assets/img/welcome/Screen Shot 2024-09-18 at 14.05.27.png"
   }
];
export function ViewWelcome() {
  const [index, setIndex] = useState(0);
  function onLanjutkan(){
   if (index == listTextWellcome.length - 1) {
      return window.location.href = "/home"
   }
   setIndex(index + 1);
  }
  function onSebelumnya(){
     if (index == 0) {
      return;
  }
  setIndex(index - 1);
  }
   return (
    <Stack>
      <Group pos={"absolute"} top={20} right={890}>
         <Anchor fw={"bold"} >Lewati</Anchor>
      </Group>
      <Stack>
         <WelcomeItem index={index} listTextWelcome={listTextWellcome}/>
      </Stack>
      <Flex
      w={"100%"}
      pos={"absolute"}
      bottom={0}
      justify={"space-between"}
      left={0}
      right={0}
      p={"xl"}
      align={"center"}
      >
         <Button
         display={(index == 0) ? "none" : "block"}
         onClick={onSebelumnya}
         radius={100}
         size="md"
         color={WARNA.btnColor}
         left={850}
         >
            Sebelumnya
         </Button>
         <Text>
            {index + 1} / {listTextWellcome.length}
         </Text>
         <Button
         onClick={onLanjutkan}
         radius={100}
         size="md"
         color={WARNA.btnColor}
         right={850}
         >
            Lanjutkan
         </Button>
      </Flex>
   </Stack>
  );
}
function WelcomeItem({
   index, listTextWelcome
} : {
   index : number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    listTextWelcome: any[];
   }) {
      return(
         <Stack>
            <Center>
               <Image
               pt={10}
               w={"90%"}
               src={listTextWelcome[index].img}
               alt="gambar wellcome"
               />
            </Center>
            <Text
            style={{
               textAlign: "center",
            }}>
               {listTextWelcome[index].text}
            </Text>
         </Stack>
      )
}
