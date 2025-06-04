import { View, ViewStyle }  from 'react-native'


type props = {
  style?: ViewStyle
  children?: React.ReactNode
  variant?: 'block' | 'circle'
}

export function Block({ style = {}, children, variant = 'block' }: props) {
  const localStyle: ViewStyle = {
    ...style,
  }

  if (variant === 'circle') {
    localStyle.borderRadius = 90
    localStyle.width = 100
    localStyle.height = 100
    localStyle.backgroundColor = '#007AFF'
  }
  
  return (
    <View style={localStyle}>
      {children}
    </View>
  )
}

