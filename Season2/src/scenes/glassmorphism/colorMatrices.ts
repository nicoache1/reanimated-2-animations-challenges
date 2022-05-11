// MARK: Matrices are from https://kazzkiq.github.io/svg-color-filter/

export const fromSVGString = (svgString: string) => {
  const matrix = svgString.split(/[\s\t]/).map(Number)
  return matrix
}

export const SEPIA = fromSVGString(`
1.3 -0.3 1.1 0 0
0 1.3 0.2 0 0
0 0 0.8 0.2 0
0 0 0 1 0
`)

export const OLD_TIMES = fromSVGString(`
1 0 0 0 0
-0.4 1.3 -0.4 0.2 -0.1
0 0 1 0 0
0 0 0 1 0
`)

export const BLACK_AND_WHITE = fromSVGString(`
0 1 0 0 0
0 1 0 0 0
0 1 0 0 0
0 1 0 1 0 
`)

export const COLD_LIFE = fromSVGString(`
1 0 0 0 0
0 1 0 0 0
-0.2 0.2 0.1 0.4 0
0 0 0 1 0
`)
