import React from 'react'

export interface Skate {
  id: string
  name: string
  price: number
  backgroundColor: string
  crest: React.ReactNode
  description: string
  material: string
  size: string
}

export interface ItemSelected {
  color: string
  position: {
    x: number
    y: number
  }
}
