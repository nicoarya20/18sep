'use client'
import { ActionIcon, Box } from '@mantine/core'
import { useRouter } from 'next/navigation'
import React from 'react'
import _ from 'lodash'
import { WARNA } from '../fun/WARNA'
import { HiChevronLeft } from 'react-icons/hi';

export default function LayoutIconBack({back} : {back? : string}) {
   const router = useRouter()
  return (
    <Box>
      <ActionIcon variant="light" onClick={() =>{
        if (!_.isUndefined(back) && !_.isNull(back)) {
          return router.push(back)
        } else {
          return router.back()
        }
          
      }} bg="white" size="lg" radius="lg" aria-label="Settings">
        <HiChevronLeft size={20} color={WARNA.btnColor} />
      </ActionIcon>
    </Box>
  )
}
