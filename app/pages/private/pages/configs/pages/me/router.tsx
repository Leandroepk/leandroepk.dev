import React from 'react'
import { Page } from './component'

export function meta() {
  return [
    { title: 'Portfolio - Leandro EPK' },
    { name: 'description', content: 'My personal settings' },
  ]
}

export default function Router() {
  return <Page />
}
