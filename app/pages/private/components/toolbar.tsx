import React from 'react'
import { ColorModeButton } from '@/components/ui/color-mode'
import { Box, Flex, Heading, IconButton, VStack } from '@chakra-ui/react'
import { HiHome, HiMenu } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import { RouterLink } from '@/components/custom/RouterLink'

const TopToolbar = () => {
  const { t } = useTranslation()

  return (
    <Flex
      align="center"
      width="100%"
      bgColor="bg.muted"
      height={14}
      px={4}
      display={'flex'}
      borderBottomWidth={1}
      borderColor={'border.success'}
    >
      <Flex flex="1" justify="center">
        <Heading size="lg">{t('app-title')}</Heading>
      </Flex>

      <Box display={{ base: 'none', md: 'flex' }}>
        <ColorModeButton />
      </Box>
    </Flex>
  )
}

const BotToolbar = ({ toggleOpenMenu }: { toggleOpenMenu: () => void }) => {
  return (
    <Flex
      align="center"
      width="100%"
      bgColor="bg.muted"
      height={14}
      px={4}
      display={{ base: 'flex', md: 'none' }}
      justify="space-around"
      borderTopWidth={1}
      borderColor={'border.success'}
    >
      <ColorModeButton />

      <RouterLink to="/">
        <IconButton aria-label="Toggle Sidenav" variant="ghost">
          <HiHome />
        </IconButton>
      </RouterLink>

      <IconButton
        aria-label="Toggle Sidenav"
        onClick={toggleOpenMenu}
        variant="ghost"
      >
        <HiMenu />
      </IconButton>
    </Flex>
  )
}

export const Toolbar = ({
  openMenu,
  setOpenMenu,
  children,
}: {
  openMenu: boolean
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}) => {
  const toggleOpenMenu = () => setOpenMenu(!openMenu)

  return (
    <VStack minH="100dvh" justify="space-between" p={0}>
      <TopToolbar />
      <Box
        padding={4}
        width="100%"
        flex="1"
        overflowY="auto"
        height="max-content"
      >
        {children}
      </Box>
      <Box position="sticky" bottom="0" width="100%" zIndex={10}>
        <BotToolbar toggleOpenMenu={toggleOpenMenu} />
      </Box>
    </VStack>
  )
}
