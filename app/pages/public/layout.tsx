import React from 'react'
import { Box, Center, Heading, HStack, VStack } from '@chakra-ui/react'
import { Outlet, redirect, type LoaderFunctionArgs } from 'react-router'
import { ColorModeButton } from '@/components/ui/color-mode'
import { isAuthenticated } from '../private/utils/authGuard'
import { useTranslation } from 'react-i18next'

export async function loader({ request }: LoaderFunctionArgs) {
  const auth = isAuthenticated(request)
  if (auth) return redirect('/')
}

export default function Layout() {
  const { t } = useTranslation()

  return (
    <VStack gap={0} align="stretch">
      <Box display={{ base: 'block', md: 'none' }} bg="green.800" py={4}>
        <Center>
          <Heading size="lg" color="white">
            {t('app-title')}
          </Heading>
        </Center>
      </Box>

      <HStack gap={0} align="stretch">
        <Box
          w={'50%'}
          h={'100vh'}
          bg={'green.800'}
          display={{ base: 'none', md: 'block' }}
        >
          <Center h={'100%'}>
            <Heading mb={6} size="lg" color="white">
              {t('app-title')}
            </Heading>
          </Center>
        </Box>

        <Center padding={4} w={{ base: 'full', md: '50%' }}>
          <Box
            w="sm"
            paddingTop={4}
            paddingBottom={4}
            paddingLeft={10}
            paddingRight={10}
            m="auto"
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
          >
            <Outlet />
          </Box>
        </Center>
      </HStack>
      <ColorModeButton position={'absolute'} right={3} top={3} />
    </VStack>
  )
}
