import React from 'react'
import { NavLink, type NavLinkProps } from 'react-router'
import {
  Link as ChakraLink,
  type LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import { forwardRef } from 'react'

type RouterLinkProps = ChakraLinkProps & NavLinkProps

export const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (props, ref) => {
    return (
      <ChakraLink
        as={NavLink}
        ref={ref}
        _focusVisible={{
          outline: 'none',
          boxShadow: 'none',
        }}
        _focus={{
          outline: 'none',
          boxShadow: 'none',
        }}
        {...props}
      />
    )
  }
)
