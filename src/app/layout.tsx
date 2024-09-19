import '@mantine/core/styles.css';
import { Lato } from 'next/font/google';
import React from 'react';
import { Box, ColorSchemeScript, Container, MantineProvider, rem } from '@mantine/core';
import { Toaster } from 'react-hot-toast';
import '@mantine/carousel/styles.css';


export const metadata = {
  title: 'FURNITURA',
  description: 'Furniture Online Shop',
};

const LatoFont = Lato({
  subsets : ['latin'],
  weight : ['300', '400', '700'],
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript/>
      </head>
      <body className={LatoFont.className}>
        <MantineProvider>
          <Box bg={'dark'} pos={"fixed"} w={"100%"} h={"100%"} style={{
            overflowY : "auto"
          }}>
            <Toaster/>
            <Container mih={'100vh'} p={0} size={rem(550)} bg={'white'}>
              {children}
            </Container>
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
