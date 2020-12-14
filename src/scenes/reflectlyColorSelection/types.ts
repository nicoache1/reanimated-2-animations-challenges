export interface ReflectlyColor {
  id: number
  start: string
  end: string
}

export interface Position {
  x: number
  y: number
}

export interface ColorSelectionState {
  previous: ReflectlyColor
  current: ReflectlyColor
  position: Position
}
