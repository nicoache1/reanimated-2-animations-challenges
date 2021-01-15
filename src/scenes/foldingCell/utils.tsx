/* eslint-disable prettier/prettier */

export const rotateX = (deg: any) => {
  'worklet';
  const rad = (Math.PI / 180) * deg
  const cos = Math.cos(rad)
  const sin = Math.sin(rad)
  
  const rotationMatrix = [1, 0, 0, 0, 0, cos, -sin, 0, 0, sin, cos, 0, 0, 0, 0, 1]
  return rotationMatrix
}

export const createIdentityMatrix = () => {
  'worklet';
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
}

export const reusePerspectiveCommand = (matrixCommand: any, p: any) => {
  'worklet';
  const unapplied = matrixCommand
  unapplied[11] = -1 / p
  return unapplied
}

export const multiplyInto = (a: any, b: any) => {
  'worklet';
  const out = createIdentityMatrix()
  const a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3],
    a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7],
    a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11],
    a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15]

  let b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3]
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

  b0 = b[4]
  b1 = b[5]
  b2 = b[6]
  b3 = b[7]
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

  b0 = b[8]
  b1 = b[9]
  b2 = b[10]
  b3 = b[11]
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

  b0 = b[12]
  b1 = b[13]
  b2 = b[14]
  b3 = b[15]
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33

  return out
}

export const reuseTranslate3dCommand =(
  matrixCommand: any,
  x: number,
  y: number,
  z: number,
) => {
  'worklet';
  const result = matrixCommand
  result[12] = x
  result[13] = y
  result[14] = z

  return result
}


export const getTransformations = (deg: number, origin: { x: number, y: number, z: number } ) => {
  "worklet";

  const {x,y,z} = origin

  // FIRST OBTAIN THE ROTATION
  const rotatedMatrix = rotateX(deg)

  // TRANSLATE TO ORIGIN AND APPLY THE ROTATION
  const translate = createIdentityMatrix()
  const translatedMatrix = reuseTranslate3dCommand(translate, x, y, z)

  const untranslated = createIdentityMatrix()
  const untranslatedMatrix = reuseTranslate3dCommand(untranslated, -x, -y, -z)


  const firstMulti = multiplyInto(translatedMatrix, rotatedMatrix)
  const secondMulti = multiplyInto(firstMulti, untranslatedMatrix)

  // APPLY PERSPECTIVE
  const perspective = createIdentityMatrix()
  const appliedPerspective = reusePerspectiveCommand(perspective, 1500)
  const matrix = multiplyInto(secondMulti, appliedPerspective)

  const transformations = [{ perspective:  1000  }, { matrix }]
  return {
    transformations
  }
}

