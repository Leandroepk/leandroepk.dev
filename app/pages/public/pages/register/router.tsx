import React from 'react'
import { Page } from './component'

export function meta() {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Router() {
  return <Page />
}
