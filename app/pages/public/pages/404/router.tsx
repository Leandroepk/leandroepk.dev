import React from 'react'
import { Page } from './component'

export function meta() {
  return [
    { title: '404' },
    { name: 'description', content: 'No content found' },
  ]
}

export default function Router() {
  return <Page />
}
