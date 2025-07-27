import React from 'react'
import {
  Accordion,
  Box,
  Button,
  CloseButton,
  Drawer,
  Heading,
  HStack,
  Portal,
  Spacer,
  VStack,
} from '@chakra-ui/react'
import sidenavDB from '../db/sidenav.json'
import { IconByName } from '@/components/custom/IconsMap'
import { BiExit } from 'react-icons/bi'
import authService from '@/pages/public/services/authService'
import { useNavigate } from 'react-router'
import Cookies from 'js-cookie'
import { RouterLink } from '@/components/custom/RouterLink'
import { useTranslation } from 'react-i18next'

const LogoutButton = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = React.useState(false)
  const { t } = useTranslation()

  const handleLogout = async () => {
    setLoading(true)
    try {
      await authService.logout()
    } catch (error) {
      console.log(error)
    }
    Cookies.remove('session')
    navigate('/login')
    setLoading(false)
  }

  return (
    <Button
      onClick={handleLogout}
      variant="ghost"
      loading={loading}
      loadingText={t('logout.loading')}
    >
      <BiExit color="red" /> {t('logout.button')}
    </Button>
  )
}

const SidenavList = ({ isMobile }: { isMobile: boolean }) => {
  const { t } = useTranslation()
  const isMultiple = React.useMemo(() => !isMobile, [isMobile])
  const defaultValue = React.useMemo(
    () => (isMultiple ? sidenavDB.map((item) => item.title) : []),
    [isMultiple]
  )
  return (
    <Accordion.Root
      collapsible
      multiple={isMultiple}
      defaultValue={defaultValue}
    >
      {sidenavDB.map((item, index) => (
        <Accordion.Item key={index} value={item.title}>
          <Accordion.ItemTrigger
            display={'flex'}
            justifyContent={'space-between'}
          >
            <HStack>
              {item.icon && <IconByName iconName={item.icon} />}
              {t(`sidenav.items.${item.title}.title`)}
            </HStack>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent ml={6}>
            {item.children.map((child) => (
              <Accordion.ItemBody key={child.title}>
                <RouterLink to={child.link}>
                  <HStack>
                    {child.icon && <IconByName iconName={child.icon} />}
                    {t(`sidenav.items.${item.title}.${child.title}`)}
                  </HStack>
                </RouterLink>
              </Accordion.ItemBody>
            ))}
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

const MobileSidenav = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Box display={{ base: 'block', md: 'none' }}>
      <Drawer.Root
        open={open}
        onOpenChange={() => setOpen(!open)}
        placement={'bottom'}
      >
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Menú</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <SidenavList isMobile={true} />
                <Drawer.Footer display={'flex'}>
                  <LogoutButton />
                </Drawer.Footer>
              </Drawer.Body>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  )
}

const DesktopSidenav = () => {
  const { t } = useTranslation()
  return (
    <VStack
      display={{ base: 'none', md: 'flex' }}
      height="100vh"
      overflow={'auto'}
      padding={5}
      width={250}
      align="stretch"
    >
      <VStack align="stretch">
        <Heading size="lg" mb={5}>
          {t('sidenav.title')}
        </Heading>
        <SidenavList isMobile={false} />
      </VStack>
      <Spacer />
      <LogoutButton />
    </VStack>
  )
}

export const Sidenav = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Box>
      <MobileSidenav open={open} setOpen={setOpen} />
      <DesktopSidenav />
    </Box>
  )
}
