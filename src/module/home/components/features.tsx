'use client'

import { WARNA } from "@/module/_global/fun/WARNA"
import { ActionIcon, Box, Center,  SimpleGrid, Text } from "@mantine/core"
import { useRouter } from "next/navigation"
import { FaChair, FaBox } from "react-icons/fa6";
import { MdTableRestaurant } from "react-icons/md";
import { HiSquares2X2 } from "react-icons/hi2";
import ListBarang from "./ui/list_barang";


export default function Features() {
   const router = useRouter()
   return (
      <>
         <Box pt={10}>
            <Text c={WARNA.btnColor} mb={10} fw={"bold"} fz={16}>Features</Text>
            <SimpleGrid
               cols={{ base: 4, sm: 4, lg: 4 }}>
               <Box onClick={() => router.push('/meja')}>
                  <Center>
                     <ActionIcon
                        size={68}
                        aria-label="Action Icon"
                        radius={100}
                        bg={WARNA.btnColor}
                     >
                        <MdTableRestaurant size={35} color={'white'} />
                     </ActionIcon>
                  </Center>
                  <Center>
                     <Text fz={15} c={WARNA.btnColor}>Meja</Text>
                  </Center>
               </Box>
               <Box onClick={() => router.push('/kursi')}>
                  <Center>
                     <ActionIcon
                        size={68}
                        aria-label="Action Icon"
                        radius={100}
                        bg={WARNA.btnColor}
                     >
                        <FaChair size={35} color={"white"} />
                     </ActionIcon>
                  </Center>
                  <Center>
                     <Text fz={15} c={WARNA.btnColor}>Kursi</Text>
                  </Center>
               </Box>
               <Box onClick={() => router.push('/box')}>
                  <Center>
                     <ActionIcon
                        size={68}
                        aria-label="Action Icon"
                        radius={100}
                        bg={WARNA.btnColor}
                     >
                        <FaBox size={35} color={"white"} />
                     </ActionIcon>
                  </Center>
                  <Center>
                     <Text fz={15} c={WARNA.btnColor}>Box</Text>
                  </Center>
               </Box>
               <Box onClick={() => router.push('/detail-feature')}>
                  <Center>
                     <ActionIcon
                        size={68}
                        aria-label="Action Icon"
                        radius={100}
                        bg={WARNA.btnColor}
                     >
                        <HiSquares2X2 size={35} color={"white"} />
                     </ActionIcon>
                  </Center>
                  <Center>
                     <Text fz={15} c={WARNA.btnColor}>Semua</Text>
                  </Center>
               </Box>
              <ListBarang/>

            </SimpleGrid>
         </Box>
      </>
   )
}
