import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export function Page() {
  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height={'-webkit-fill-available'}
    >
      <Heading textAlign="center" size="3xl">
        Lo siento
      </Heading>

      <Text mt={6} textAlign="center">
        La página aun esta en construcción
      </Text>
      <Text mt={2} textAlign="center">
        por favor vuelve más tarde.
      </Text>
    </Box>
  )
}
