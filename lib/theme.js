import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f4f0eA', '#202023')(props)
    }
  })
}

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  mycolor: '#309adb'
}

const colors = {
  glassTeal: '#88ccca',
  mycolro: '#000000'
}

const config = {
  initialColorMode: 'red',
  useSystemColorMode: true
}

const shadows = {
  outline: '0 0 0 3px var(--chakra-colors-mycolor-500)'
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
  shadows
})

export default theme
