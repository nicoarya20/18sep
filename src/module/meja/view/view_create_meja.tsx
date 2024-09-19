import { Box, Button, Stack, Textarea, TextInput } from "@mantine/core";
import NavbarMeja from "../components/ui/navbar_meja";
import { WARNA } from "@/module/_global/fun/WARNA";
import { HiOutlineChevronRight } from "react-icons/hi";


export default function ViewCreateMeja() {
  return (
      <Box>
         <NavbarMeja/>
        <Stack
        align="center"
        justify="center"
        gap="xs"
        pt={30}
        px={20}
        >
          <TextInput
          size="md" type="text" radius={30} placeholder="Judul Meja" withAsterisk label="Judul" w={"100%"} 
          styles={{
             input: {
                color:WARNA.btnColor,
                borderRadius: WARNA.btnColor,
                borderColor: WARNA.btnColor
             }
          }}
          />
          <Textarea
          size="md"
          radius={20}
          w={"100%"}
          label="Meja"
          withAsterisk
          placeholder="DeskripsiMeja"
          styles={{
             input: {
                color:WARNA.btnColor,
                borderRadius: WARNA.btnColor,
                borderColor: WARNA.btnColor
             }
          }}
          />
          <Button
          rightSection={<HiOutlineChevronRight size={14}/>} variant="default" fullWidth radius={30} size="md" mt={10}>
          Pilih Meja
          </Button>
      </Stack>
      <Box mt={30} mx={20}>
        <Button
        c="white"
        bg={WARNA.btnColor}
        size="md"
        radius={30}
        fullWidth
        >
          Simpan
          </Button>
      </Box>
      </Box>
  )
}
