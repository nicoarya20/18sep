'use client'

import { WARNA } from "@/module/_global/fun/WARNA"
import LayoutDrawer from "@/module/_global/layout/layout_drawer"
import LayoutIconBack from "@/module/_global/layout/layout_icon_back"
import LayoutNavbarHome from "@/module/_global/layout/layout_navbar_home"
import { useHookstate } from "@hookstate/core"
import { ActionIcon, Grid, Group, Text } from "@mantine/core"
import { HiMenu } from "react-icons/hi"
import DrawerMeja from "./drawer_meja"
import { isDrawer } from "@/module/_global/val/isDrawer"

export default function NavbarMeja() {
  const openDrawer = useHookstate(isDrawer)
  return (
    <>
    <LayoutNavbarHome>
      <Grid>
        <Grid.Col span={"auto"}>
          <LayoutIconBack back="/home" />
        </Grid.Col>
        <Grid.Col span={6}>
          <Text ta={"center"} fw={"bold"} c={"white"}>MEJA</Text>
        </Grid.Col>
        <Grid.Col span={"auto"}>
          <Group justify="flex-end">
            <ActionIcon onClick={() => openDrawer.set(true)} variant="light" bg="white" size="lg" radius="lg" aria-label="Settings">
              <HiMenu size={20} color={WARNA.btnColor} />
            </ActionIcon>
          </Group>
        </Grid.Col>
      </Grid>
    </LayoutNavbarHome>
    <LayoutDrawer opened={openDrawer.get()} title="MENU" onClose={() => openDrawer.set(false)}>
      <DrawerMeja/>
    </LayoutDrawer>
    </>
  )
}
