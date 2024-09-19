import { Box, Button, Stack, Textarea, TextInput } from "@mantine/core";
import NavbarEditMeja from "../components/ui/navbar_edit_meja";
import { WARNA } from "@/module/_global/fun/WARNA";
import { HiOutlineChevronRight } from "react-icons/hi2";

export default function ViewEditMeja() {
  return (
    <Box>
      <NavbarEditMeja/>
      <Stack
      align="center"
      justify="center"
      gap={"xs"}
      pt={30}
      px={20}
      >
         <TextInput
         size="md" type="text" radius={30} placeholder="Judul Pengumuman" withAsterisk label="Judul" w={"100%"}
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
      radius={"md"}
      w={"100%"}
      label="Meja"
      withAsterisk
      placeholder="Deskripsi Meja"
      styles={{
         input: {
            color:WARNA.btnColor,
            borderRadius: WARNA.btnColor,
            borderColor: WARNA.btnColor
         }
      }}
      />
      <Button rightSection={<HiOutlineChevronRight size={14}/>} variant="default" fullWidth radius={30} size="md" mt={10}>
         Pilih Meja
      </Button>
      </Stack>
      <Box mt={30} mx={20}>
         <Button
         c={"white"}
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
