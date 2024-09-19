import { WARNA } from "@/module/_global/fun/WARNA";
import { isDrawer } from "@/module/_global/val/isDrawer";
import { useHookstate } from "@hookstate/core";
import { Box, Flex, SimpleGrid, Stack, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import { IoAddCircle } from "react-icons/io5";
import { RiFilter2Line } from "react-icons/ri";


export default function DrawerMeja() {
   const openDrawer = useHookstate(isDrawer)
   const router = useRouter()

   function onClose() {
      openDrawer.set(false)
   }
  return (
    <Box>
      <Stack pt={10}>
         <SimpleGrid
         cols={{ base: 3, sm: 3, lg: 3}}
         >
            <Flex justify={"center"} align={"center"} direction={"column"}
            onClick={() => {
               router.push('/meja/create')
               onClose()
            }}>
               <Box>
                  <IoAddCircle size={30} color={WARNA.btnColor} />
               </Box>
               <Box>
                  <Text c={WARNA.btnColor} ta={"center"}>Tambah Meja</Text>
               </Box>
            </Flex>

            <Flex justify={"center"} align={"center"} direction={"column"}>
               <Box>
                  <RiFilter2Line size={30} color={WARNA.btnColor} />
               </Box>
               <Box>
                  <Text c={WARNA.btnColor} ta={"center"}>Filter</Text>
              </Box>            
            </Flex>
         </SimpleGrid>

      </Stack>
    </Box>
  )
}
