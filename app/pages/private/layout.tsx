import React from 'react'
import { Box, HStack } from '@chakra-ui/react'
import { Outlet, redirect, type LoaderFunctionArgs } from 'react-router'
import { Sidenav } from './components/sidenav'
import { Toolbar } from './components/toolbar'
import { isAuthenticated } from './utils/authGuard'

export async function loader({ request }: LoaderFunctionArgs) {
  const auth = await isAuthenticated(request)
  if (!auth) return redirect('/login')
}

export default function Layout() {
  const [openMenu, setOpenMenu] = React.useState(false)

  return (
    <HStack gap={0} height="100vh">
      <Sidenav open={openMenu} setOpen={setOpenMenu} />
      <Box height="100vh" width="100%" display="flex" flexDirection="column">
        <Toolbar openMenu={openMenu} setOpenMenu={setOpenMenu}>
          <Outlet />
        </Toolbar>
      </Box>
    </HStack>
  )
}
