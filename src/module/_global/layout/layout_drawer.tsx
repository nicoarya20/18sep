import { Box, Drawer, Text } from '@mantine/core'
import React from 'react'
import { WARNA } from '../fun/WARNA'

export default function LayoutDrawer({opened, onClose, title, children, size} : {children : React.ReactNode, opened: boolean, onClose: () => void, title : React.ReactNode,  size?: string}) {
  return (
   <Box>
    <Drawer opened={opened}  title={<Text c={WARNA.btnColor} fw={"bold"}>{title}</Text>} onClose={onClose} position='bottom' size={(size === 'lg') ? '80%' : '30%'}
    styles={{
      content : {
         backgroundColor : WARNA.bgKrem,
         borderRadius : '20px 20px 0 0'

      },
    }}
    >
    {children}
    </Drawer>
    </Box>
  )
}
