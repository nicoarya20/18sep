import { Box, Image, Stack } from '@mantine/core'
import { useRouter } from 'next/navigation'


const dataImage = [
   {
      id: 1,
      name: "Meja 1",
      image: "/assets/img/carousel/2.png"
   },
   {
      id: 2,
      name: "Meja 1",
      image: "/assets/img/carousel/3.png"
   },
   {
      id: 3,
      name: "Meja 1",
      image: "/assets/img/carousel/3.png"
   },
   {
      id: 4,
      name: "Meja 1",
      image: "/assets/img/carousel/3.png"
   },
]

export default function ListBarang() {
   const router = useRouter()

   return (
      <Box>
         {dataImage.map((v, i) => {
            return (
               <Stack key={i}>
                  <Box pt={0} onClick={() => router.push(`/meja/${v.id}`)} style={{
                     cursor: 'pointer'
                  }}>
                     <Image src={v.image} alt={'feature'} w={500} h={200} radius={10} right={200} />
                  </Box>
               </Stack>
            )
         })}
      </Box>
   )
}
