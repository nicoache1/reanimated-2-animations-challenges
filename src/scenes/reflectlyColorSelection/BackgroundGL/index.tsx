import { GLSL, Node, Shaders } from 'gl-react'
import { Blur } from 'gl-react-blur'
import { Surface } from 'gl-react-native'
import React, { useRef } from 'react'
import { Dimensions, StyleSheet } from 'react-native'

import { color2vector, useGLProgress } from '../GLUtils'

interface BackgrounGLProps {
  colorSelection: {
    position: { x: number; y: number }
    current: { start: string; end: string }
    previous: { start: string; end: string }
  }
}

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    height: height,
    left: -(height - width) / 2,
    position: 'absolute',
    top: 0,
    width: height,
  },
})

const shaders = Shaders.create({
  background: {
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform vec2 position;
uniform vec3 backgroundColorStart;
uniform vec3 backgroundColorEnd;
uniform vec3 foregroundColorStart;
uniform vec3 foregroundColorEnd;
uniform float progress;
vec4 gradient(vec3 start, vec3 end) {
  return vec4(mix(start, end, uv.y), 1.0);
}
void main() {
  float mag = distance(uv, position);
  gl_FragColor = mag < progress ? 
    gradient(foregroundColorStart, foregroundColorEnd)
  : 
    gradient(backgroundColorStart, backgroundColorEnd);
}
`,
  },
})

export const BackgroundGL = ({
  colorSelection: { position, current, previous },
}: BackgrounGLProps) => {
  const node = useRef<Node>(null)
  const uniforms = {
    backgroundColorEnd: color2vector(previous.end),
    backgroundColorStart: color2vector(previous.start),
    foregroundColorEnd: color2vector(current.end),
    foregroundColorStart: color2vector(current.start),
    position: [
      ((height - width) / 2 + position.x) / height,
      1 - position.y / height,
    ],
    progress: 0,
  }
  useGLProgress(node, uniforms, [current])
  return (
    <Surface style={styles.container}>
      <Blur factor={20} passes={6}>
        <Node ref={node} shader={shaders.background} uniforms={uniforms} />
      </Blur>
    </Surface>
  )
}
