import React from 'react'
import { ColorModeButton } from '@/components/ui/color-mode'
import { Box, Flex, Heading, IconButton } from '@chakra-ui/react'
import { HiMenu } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'

export const Toolbar = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { t } = useTranslation()
  return (
    <Flex align="center" width="100%" bgColor="bg.muted" height={14} px={4}>
      <Box>
        <IconButton
          aria-label="Toggle Sidenav"
          onClick={() => setOpenMenu(!openMenu)}
          variant="ghost"
          display={{ base: 'inline-flex', md: 'none' }}
        >
          <HiMenu />
        </IconButton>
      </Box>

      <Flex flex="1" justify="center">
        <Heading size="lg">{t('app-title')}</Heading>
      </Flex>

      <Box>
        <ColorModeButton />
      </Box>
    </Flex>
  )
}
