export interface Vector<> {
  x: number
  y: number
}

type Transform2dName =
  | 'translateX'
  | 'translateY'
  | 'scale'
  | 'skewX'
  | 'skewY'
  | 'scaleX'
  | 'scaleY'
  | 'rotateZ'
  | 'rotateY'
  | 'rotateX'
  | 'rotate'
type Transformations = {
  [Name in Transform2dName]: number | string
}
export type Transforms2d = (
  | Pick<Transformations, 'translateX'>
  | Pick<Transformations, 'translateY'>
  | Pick<Transformations, 'scale'>
  | Pick<Transformations, 'scaleX'>
  | Pick<Transformations, 'scaleY'>
  | Pick<Transformations, 'skewX'>
  | Pick<Transformations, 'skewY'>
  | Pick<Transformations, 'rotateZ'>
  | Pick<Transformations, 'rotateY'>
  | Pick<Transformations, 'rotateX'>
  | Pick<Transformations, 'rotate'>
)[]

export const transformOrigin = (
  { x, y }: Vector,
  transformations: Transforms2d,
): Transforms2d => {
  // eslint-disable-next-line prettier/prettier
  'worklet';
  return [
    { translateX: x },
    { translateY: y },
    ...transformations,
    { translateX: -x },
    { translateY: -y },
  ]
}
