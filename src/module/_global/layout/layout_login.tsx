import { Image, rem, Stack, Title } from '@mantine/core'
import React from 'react'
import { WARNA } from '../fun/WARNA'

export default function LayoutLogin({ children }: { children: React.ReactNode }) {
   return (
      <>
         <Stack justify='center' align='center' pt={rem(50)}>
            <Image w={102} h={102} src={"/assets/img/logo/FURNIRO.png"} alt='logo' />
            <Title c={WARNA.btnColor} order={4}>
               FURNITURE MASA KINI
            </Title>

         </Stack>
         {children}
      </>
   )
}
