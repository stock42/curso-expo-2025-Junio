import { Text as RNText, TextStyle, ViewStyle } from 'react-native'

import styles from './styles'
type Props = {
    children: string
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'link'
    color?: string
    style?: TextStyle & ViewStyle
}

export function Text({ children, variant, color, style = {} }: Props) {

  const localStyle: TextStyle & ViewStyle = {
    ...styles.container,
    ...style,
  }
  
  if (variant) {
    switch (variant) {
      
      case 'h1':
        localStyle.fontSize = 48
        localStyle.lineHeight = 56
        localStyle.fontWeight = 'bold'
        break;
      case 'h2':
        localStyle.fontSize = 40
        localStyle.lineHeight = 48
        localStyle.fontWeight = 'bold'
        break;
      case 'h3':
        localStyle.fontSize = 32
        localStyle.lineHeight = 40
        localStyle.fontWeight = 'bold'
        break;
      case 'h4':
        localStyle.fontSize = 24
        localStyle.lineHeight = 32
        localStyle.fontWeight = 'bold'
        break;
      case 'h5':
        localStyle.fontSize = 20
        localStyle.lineHeight = 28
        localStyle.fontWeight = 'bold'
        break;

      case 'link':
        localStyle.color = '#007AFF'
        localStyle.textDecorationLine = 'underline'
        break;
    }
  }

  if (color) {
    localStyle.color = color
  }

  return (
    <RNText style={localStyle} > 
      {children}
    </RNText>
  )
}
