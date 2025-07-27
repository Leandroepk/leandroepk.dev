import React from 'react'
import { useTranslation } from 'react-i18next'
import { Heading, Text, Box } from '@chakra-ui/react'

export function Page() {
  const { t } = useTranslation()

  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height={'100vh'}
    >
      <Heading textAlign="center" size="7xl">
        {t('404.title')}
      </Heading>

      <Text mt={4} textAlign="center">
        {t('404.description')}
      </Text>
    </Box>
  )
}
