
import { View, StyleSheet }  from 'react-native'

export function Screen({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 20,
  }
})