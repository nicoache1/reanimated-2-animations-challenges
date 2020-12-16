import React from 'react'

export interface TabBarItem {
  color: string
  value: number
  icon: (active: boolean) => React.ReactNode
  label: string
  textColor: string
}
