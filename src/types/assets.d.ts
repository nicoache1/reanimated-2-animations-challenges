declare module '*.png' {
  const content: any
  export default content
}

declare module '*.jpg' {
  const content: any
  export default content
}

declare module '*.jpeg' {
  const content: any
  export default content
}
declare module '*.mp4' {
  const content: any
  export default content
}

declare module '*.gif' {
  const content: any
  export default content
}

declare module '*.svg' {
  import { SvgProps } from 'react-native-svg'
  import React from 'react'
  const content: React.FC<SvgProps>
  export default content
}
