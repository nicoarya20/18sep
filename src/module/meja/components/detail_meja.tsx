import { Box, Group, Stack, Text } from "@mantine/core";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsCardText } from "react-icons/bs";

export default function DetailMeja() {
  return (
   <Box py={30} px={20}>
      <Box p={20} style={{borderRadius: 10, border: '1px solid #E5E5E5'}} bg='white'>
         <Stack>
            <Group>
               <TfiAnnouncement size={25} />
               <Text fw={"bold"}>Jenis Meja</Text>
            </Group>
            <Group>
               <BsCardText size={25} />
               <Text>Jenis-Jenis Meja di Funitura</Text>
            </Group>
         </Stack>
         <Box my={15} p={20} style={{borderRadius: 10, border: '1px solid #E5E5E5'}}>
            <Stack>
               <Text>

               </Text>
            </Stack>
         </Box>

      </Box>
   </Box>
  )
}
