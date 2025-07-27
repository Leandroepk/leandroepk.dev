import React from 'react'
import { Page } from './component'

export function meta() {
  return [
    { title: 'Page not found' },
    { name: 'description', content: '404 Page not found' },
  ]
}

export default function Router() {
  return <Page />
}
