'use client'

import { WARNA } from "@/module/_global/fun/WARNA"
import { ActionIcon, Box, Group, Text, TextInput } from "@mantine/core"
import { useRouter } from "next/navigation"
import { HiMagnifyingGlass } from "react-icons/hi2"
import { MdTableRestaurant } from "react-icons/md"

const dataMeja = [

   {
      id: 1,
      name: "Meja 1",
      status: "Tersedia"
   },
   {
      id: 2,
      name: "Meja 2",
      status: "Tidak Tersedia"
   },
   {
      id: 3,
      name: "Meja 3",
      status: "Tersedia"
   },
   {
      id: 4,
      name: "Meja 4",
      status: "Tidak Tersedia"
   },
   {
      id: 5,
      name: "Meja 5",
      status: "Tersedia"
   },
   {
      id: 6,
      name: "Meja 6",
      status: "Tidak Tersedia"
   },
   {
      id: 7,
      name: "Meja 7",
      status: "Tersedia"
   },
]

export default function ListMeja() {
   const router = useRouter()
   return (
      <Box p={20}>
         <TextInput
            styles={{
               input: {
                  color: WARNA.btnColor,
                  borderRadius: WARNA.btnColor,
                  borderColor: WARNA.btnColor
               }
            }}
            size="md"
            radius={30}
            leftSection={<HiMagnifyingGlass size={20} />}
            placeholder="Cari meja"
         />
         {dataMeja.map((v, i) => (<Box pt={20} key={i} onClick={() => {
            router.push(`/meja/${v.id}`)
         }}>
            <Group align="center" style={{
               borderBottom: `1px solid #D9D9D9`,
               padding: 10,
            }}>
               <Box>
                  <ActionIcon variant="light" bg={WARNA.btnColor} size={50} radius={100} aria-label="icon">
                     <MdTableRestaurant size={25} color={'white'} />
                  </ActionIcon>
               </Box>
               <Box>
                  <Text fw={"bold"} c={WARNA.btnColor}>{v.name}</Text>
               </Box>
            </Group>
         </Box>))}
      </Box>
   )
}